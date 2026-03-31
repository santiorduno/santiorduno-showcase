import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    defineField({ name: 'id', type: 'number' }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'icon', type: 'string' }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'object', fields: [defineField({ name: 'title', type: 'string' })] }],
    }),
  ],
});
