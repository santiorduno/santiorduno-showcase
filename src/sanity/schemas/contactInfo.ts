import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactInfo',
  type: 'document',
  title: 'Contact Info',
  fields: [
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
  ],
});
