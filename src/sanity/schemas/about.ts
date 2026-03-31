import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'age', type: 'number' }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'subtitle', type: 'string' }),
    defineField({ name: 'about', type: 'text' }),
    defineField({ name: 'bio', type: 'text' }),
    defineField({ name: 'availability', type: 'string' }),
    defineField({ name: 'fn', type: 'string' }),
    defineField({ name: 'softSkills', type: 'text' }),
  ],
});
