export interface RegistrationPayload {
  fullName: string;
  phone: string;
  state: string;
  lga: string;
  ward: string;
  endorsePledge: boolean;
}

export interface RegistrationResult {
  success: boolean;
  isConnected: boolean;
  registrationId?: string;
  error?: string;
  savedLocally?: boolean;
}

export interface GrassrootsStructureResult {
  connected: boolean;
  state: string;
  lga: string;
  message: string;
  verifiedCount?: number;
}

// Phone validation for Nigerian phone formats
export function validateNigerianPhone(phone: string): { isValid: boolean; message?: string } {
  const cleaned = phone.replace(/\s+/g, '').replace(/-/g, '');
  
  // Format check: 08012345678, 070..., 090..., 081..., +23480..., 23480...
  const phoneRegex = /^(\+?234|0)[789][01]\d{8}$/;
  
  if (!cleaned) {
    return { isValid: false, message: 'Phone number is required.' };
  }
  
  if (!phoneRegex.test(cleaned)) {
    return {
      isValid: false,
      message: 'Please enter a valid Nigerian phone number (e.g. 08012345678 or +2348012345678).'
    };
  }

  return { isValid: true };
}

// Supabase configuration detection
export function isBackendConfigured(): boolean {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  return Boolean(url && key && url.startsWith('https://'));
}

export function getBackendInfo() {
  const connected = isBackendConfigured();
  return {
    connected,
    statusText: connected ? 'Connected (Supabase Live)' : 'Awaiting Backend Connection (Supabase Unconfigured)'
  };
}

// Local Storage keys for offline preview if enabled
const LOCAL_STORAGE_KEY = 'tms_local_registrations_drafts';

export function getLocalRegistrationsCount(): number {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}

export async function submitRegistration(payload: RegistrationPayload, allowLocalDemoFallback = false): Promise<RegistrationResult> {
  // Validate phone number
  const phoneVal = validateNigerianPhone(payload.phone);
  if (!phoneVal.isValid) {
    return {
      success: false,
      isConnected: isBackendConfigured(),
      error: phoneVal.message
    };
  }

  // Validate required fields
  if (!payload.fullName.trim() || payload.fullName.trim().length < 3) {
    return {
      success: false,
      isConnected: isBackendConfigured(),
      error: 'Please enter your full name (at least 3 characters).'
    };
  }

  if (!payload.state) {
    return {
      success: false,
      isConnected: isBackendConfigured(),
      error: 'Please select your state.'
    };
  }

  if (!payload.lga.trim()) {
    return {
      success: false,
      isConnected: isBackendConfigured(),
      error: 'Please select or enter your Local Government Area (LGA).'
    };
  }

  if (!payload.ward.trim()) {
    return {
      success: false,
      isConnected: isBackendConfigured(),
      error: 'Please enter your political ward.'
    };
  }

  if (!payload.endorsePledge) {
    return {
      success: false,
      isConnected: isBackendConfigured(),
      error: 'You must check the voluntary endorsement pledge to proceed.'
    };
  }

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      // Real backend request to Supabase REST API endpoint
      const response = await fetch(`${supabaseUrl}/rest/v1/registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          full_name: payload.fullName.trim(),
          phone: payload.phone.trim(),
          state: payload.state,
          lga: payload.lga.trim(),
          ward: payload.ward.trim(),
          pledge_accepted: payload.endorsePledge,
          created_at: new Date().toISOString()
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 409 || (errorData.message && errorData.message.includes('unique'))) {
          return {
            success: false,
            isConnected: true,
            error: 'This phone number has already been registered in the database.'
          };
        }
        return {
          success: false,
          isConnected: true,
          error: `Server returned an error (${response.status}): ${errorData.message || 'Unable to save record.'}`
        };
      }

      const data = await response.json();
      const savedRecord = Array.isArray(data) ? data[0] : data;
      const registrationId = savedRecord?.registration_id || savedRecord?.id || `TMS-${Date.now().toString().slice(-6)}`;

      return {
        success: true,
        isConnected: true,
        registrationId,
        savedLocally: false
      };
    } catch (err: any) {
      return {
        success: false,
        isConnected: true,
        error: `Network error connecting to backend: ${err.message || 'Server unreachable'}`
      };
    }
  }

  // If Supabase is NOT configured
  if (allowLocalDemoFallback) {
    // Save to local storage explicitly as a demo draft
    try {
      const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      const phoneExists = existing.some((item: any) => item.phone === payload.phone.trim());
      if (phoneExists) {
        return {
          success: false,
          isConnected: false,
          error: 'This phone number is already recorded in local staging.'
        };
      }
      
      const localId = `LOCAL-DRAFT-${Math.floor(10000 + Math.random() * 90000)}`;
      existing.push({
        ...payload,
        localId,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));

      return {
        success: true,
        isConnected: false,
        savedLocally: true,
        registrationId: localId
      };
    } catch {
      return {
        success: false,
        isConnected: false,
        error: 'Failed to write to local storage.'
      };
    }
  }

  return {
    success: false,
    isConnected: false,
    error: 'Registration backend service is not yet connected. Configure Supabase (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY) to enable server-verified live registrations.'
  };
}
