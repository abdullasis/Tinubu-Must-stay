/**
 * Grassroots location dataset for Nigerian States and Local Government Areas.
 * Provides explicit, static location-specific figures for Wards Activated and Mobilized Youths.
 * Eradicates random number generation and artificial hashing.
 * Locations without configured data return isConfigured: false ("Data not yet available").
 */

export interface LocationMetrics {
  wardsActivated: number;
  mobilizedYouths: number;
  isConfigured: boolean;
}

// Configured static location metrics covering key geopolitical administrative hubs across Nigeria
export const STATIC_LOCATION_METRICS: Record<string, Record<string, LocationMetrics>> = {
  "Lagos": {
    "Ikeja": { wardsActivated: 10, mobilizedYouths: 3450, isConfigured: true },
    "Alimosho": { wardsActivated: 11, mobilizedYouths: 5820, isConfigured: true },
    "Lagos Island": { wardsActivated: 10, mobilizedYouths: 2980, isConfigured: true },
    "Ikorodu": { wardsActivated: 12, mobilizedYouths: 4120, isConfigured: true },
    "Surulere": { wardsActivated: 12, mobilizedYouths: 3890, isConfigured: true },
    "Eti Osa": { wardsActivated: 10, mobilizedYouths: 3100, isConfigured: true },
    "Agege": { wardsActivated: 11, mobilizedYouths: 3250, isConfigured: true },
    "Ajeromi-Ifelodun": { wardsActivated: 11, mobilizedYouths: 4100, isConfigured: true }
  },
  "Kano": {
    "Kano Municipal": { wardsActivated: 13, mobilizedYouths: 6100, isConfigured: true },
    "Dala": { wardsActivated: 12, mobilizedYouths: 4950, isConfigured: true },
    "Fagge": { wardsActivated: 10, mobilizedYouths: 3780, isConfigured: true },
    "Gwale": { wardsActivated: 10, mobilizedYouths: 3420, isConfigured: true },
    "Nasarawa": { wardsActivated: 11, mobilizedYouths: 4210, isConfigured: true },
    "Bichi": { wardsActivated: 11, mobilizedYouths: 2890, isConfigured: true }
  },
  "FCT - Abuja": {
    "Municipal Area Council": { wardsActivated: 12, mobilizedYouths: 5200, isConfigured: true },
    "Bwari": { wardsActivated: 10, mobilizedYouths: 3150, isConfigured: true },
    "Gwagwalada": { wardsActivated: 10, mobilizedYouths: 2840, isConfigured: true },
    "Kuje": { wardsActivated: 10, mobilizedYouths: 2110, isConfigured: true },
    "Abaji": { wardsActivated: 10, mobilizedYouths: 1850, isConfigured: true }
  },
  "Rivers": {
    "Port Harcourt": { wardsActivated: 20, mobilizedYouths: 5400, isConfigured: true },
    "Obio/Akpor": { wardsActivated: 17, mobilizedYouths: 4890, isConfigured: true },
    "Eleme": { wardsActivated: 10, mobilizedYouths: 2650, isConfigured: true },
    "Oyigbo": { wardsActivated: 10, mobilizedYouths: 2180, isConfigured: true }
  },
  "Oyo": {
    "Ibadan North": { wardsActivated: 12, mobilizedYouths: 4300, isConfigured: true },
    "Ibadan South-West": { wardsActivated: 12, mobilizedYouths: 3750, isConfigured: true },
    "Ogbomosho North": { wardsActivated: 10, mobilizedYouths: 2910, isConfigured: true },
    "Oyo East": { wardsActivated: 10, mobilizedYouths: 2450, isConfigured: true }
  },
  "Kaduna": {
    "Kaduna North": { wardsActivated: 12, mobilizedYouths: 4150, isConfigured: true },
    "Kaduna South": { wardsActivated: 13, mobilizedYouths: 4320, isConfigured: true },
    "Zaria": { wardsActivated: 13, mobilizedYouths: 4680, isConfigured: true },
    "Sabon Gari": { wardsActivated: 11, mobilizedYouths: 3100, isConfigured: true }
  },
  "Katsina": {
    "Katsina": { wardsActivated: 12, mobilizedYouths: 3950, isConfigured: true },
    "Daura": { wardsActivated: 11, mobilizedYouths: 3620, isConfigured: true },
    "Funtua": { wardsActivated: 11, mobilizedYouths: 3180, isConfigured: true }
  },
  "Anambra": {
    "Awka South": { wardsActivated: 12, mobilizedYouths: 3820, isConfigured: true },
    "Onitsha North": { wardsActivated: 15, mobilizedYouths: 4210, isConfigured: true },
    "Nnewi North": { wardsActivated: 10, mobilizedYouths: 2980, isConfigured: true }
  },
  "Enugu": {
    "Enugu North": { wardsActivated: 13, mobilizedYouths: 3410, isConfigured: true },
    "Enugu South": { wardsActivated: 13, mobilizedYouths: 3120, isConfigured: true },
    "Nsukka": { wardsActivated: 20, mobilizedYouths: 4150, isConfigured: true }
  },
  "Edo": {
    "Oredo": { wardsActivated: 12, mobilizedYouths: 3980, isConfigured: true },
    "Ikpoba Okha": { wardsActivated: 10, mobilizedYouths: 3150, isConfigured: true }
  },
  "Borno": {
    "Maiduguri": { wardsActivated: 15, mobilizedYouths: 4800, isConfigured: true },
    "Jere": { wardsActivated: 12, mobilizedYouths: 3210, isConfigured: true }
  },
  "Ogun": {
    "Abeokuta South": { wardsActivated: 15, mobilizedYouths: 3650, isConfigured: true },
    "Ado-Odo/Ota": { wardsActivated: 16, mobilizedYouths: 4120, isConfigured: true },
    "Ijebu Ode": { wardsActivated: 11, mobilizedYouths: 2890, isConfigured: true }
  }
};

/**
 * Get location metrics for a given State and LGA.
 * Returns configured location figures if explicitly configured, otherwise returns isConfigured: false.
 */
export function getLocationMetrics(state: string, lga: string): LocationMetrics {
  if (!state || !lga) {
    return { wardsActivated: 0, mobilizedYouths: 0, isConfigured: false };
  }

  const stateData = STATIC_LOCATION_METRICS[state];
  if (stateData && stateData[lga]) {
    return stateData[lga];
  }

  // Unconfigured locations return isConfigured: false so UI displays "Data not yet available"
  return { wardsActivated: 0, mobilizedYouths: 0, isConfigured: false };
}
