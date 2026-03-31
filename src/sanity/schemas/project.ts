import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    defineField({ name: 'id', type: 'number' }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'image', type: 'string', title: 'Thumbnail path' }),
    defineField({ name: 'link', type: 'url' }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{ type: 'object', fields: [
        defineField({ name: 'id', type: 'number' }),
        defineField({ name: 'name', type: 'string' }),
      ]}],
    }),
    defineField({
      name: 'metadata',
      type: 'object',
      fields: [
        defineField({ name: 'client', type: 'string' }),
        defineField({ name: 'year', type: 'string' }),
        defineField({ name: 'duration', type: 'string' }),
        defineField({ name: 'role', type: 'string' }),
        defineField({ name: 'liveUrl', type: 'url' }),
        defineField({ name: 'githubUrl', type: 'url' }),
      ],
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{
        type: 'object',
        name: 'contentSection',
        fields: [
          defineField({ name: 'id', type: 'string' }),
          defineField({ name: 'type', type: 'string', options: { list: ['text','image','video','gif','gallery','quote'] } }),
          defineField({ name: 'order', type: 'number' }),
          defineField({
            name: 'textData',
            type: 'object',
            fields: [
              defineField({ name: 'heading', type: 'string' }),
              defineField({ name: 'body', type: 'text' }),
              defineField({ name: 'alignment', type: 'string', options: { list: ['left','center','right'] } }),
            ],
          }),
          defineField({
            name: 'mediaData',
            type: 'object',
            fields: [
              defineField({ name: 'src', type: 'string' }),
              defineField({ name: 'alt', type: 'string' }),
              defineField({ name: 'caption', type: 'string' }),
              defineField({ name: 'width', type: 'string', options: { list: ['full','large','medium','small'] } }),
            ],
          }),
          defineField({
            name: 'galleryData',
            type: 'object',
            fields: [
              defineField({ name: 'layout', type: 'string', options: { list: ['grid','masonry','carousel'] } }),
              defineField({ name: 'columns', type: 'number' }),
              defineField({
                name: 'images',
                type: 'array',
                of: [{ type: 'object', fields: [
                  defineField({ name: 'src', type: 'string' }),
                  defineField({ name: 'alt', type: 'string' }),
                  defineField({ name: 'caption', type: 'string' }),
                ]}],
              }),
            ],
          }),
          defineField({
            name: 'quoteData',
            type: 'object',
            fields: [
              defineField({ name: 'text', type: 'text' }),
              defineField({ name: 'author', type: 'string' }),
              defineField({ name: 'role', type: 'string' }),
            ],
          }),
        ],
      }],
    }),
  ],
});
