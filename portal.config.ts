/**
 * Province of Bulacan transparency portal configuration.
 * Includes Bulacan DPWH district offices and province-named projects.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'bulacan-province',
  kind: 'province',
  name: 'Province of Bulacan',
  shortName: 'Bulacan',
  operator: { name: 'BetterGov.ph', url: 'https://bettergov.ph' },
  scope: {
    offices: [
      'Bulacan 1st District Engineering Office',
      'Bulacan 2nd District Engineering Office',
      'Bulacan 3rd District Engineering Office',
      'Bulacan Sub-District Engineering Office',
    ],
    places: [{ label: 'Bulacan', region: 'III' }],
    districts: [],
    exclude: [],
  },
  reporting: { enabled: false },
});
