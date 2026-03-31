import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'certification',
  type: 'document',
  title: 'Certification',
  fields: [
    defineField({ name: 'id', type: 'number' }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'institution', type: 'string' }),
    defineField({ name: 'logo', type: 'url' }),
    defineField({ name: 'url', type: 'url' }),
  ],
});
