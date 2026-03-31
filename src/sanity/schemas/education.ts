import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'education',
  type: 'document',
  title: 'Education',
  fields: [
    defineField({ name: 'id', type: 'number' }),
    defineField({ name: 'institution', type: 'string' }),
    defineField({ name: 'degree', type: 'string' }),
    defineField({ name: 'credential', type: 'string' }),
    defineField({ name: 'status', type: 'string' }),
  ],
});
