import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'qwhs1663',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
