import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'socialLink',
  type: 'document',
  title: 'Social Link',
  fields: [
    defineField({ name: 'id', type: 'number' }),
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'url', type: 'url' }),
    defineField({ name: 'icon', type: 'string' }),
  ],
});
