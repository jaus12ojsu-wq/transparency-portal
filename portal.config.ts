/**
 * Baliwag, Bulacan transparency portal configuration.
 * The place query captures projects whose titles name Baliwag.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'baliwag-bulacan',
  kind: 'municipality',
  name: 'City of Baliwag, Bulacan',
  shortName: 'Baliwag',
  operator: { name: 'BetterGov.ph', url: 'https://bettergov.ph' },
  scope: {
    offices: [],
    places: [{ label: 'Baliwag', region: 'III' }],
    districts: [],
    exclude: [],
  },
  reporting: { enabled: false },
});
