import {defineType, defineField} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

export const tableType = defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'header',
      title: 'Table Header',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Header row cells',
    }),
    defineField({
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      of: [{type: 'tableRow'}],
      description: 'Data rows',
    }),
    defineField({
      name: 'caption',
      title: 'Table Caption',
      type: 'string',
      description: 'Optional table caption',
    }),
  ],
  preview: {
    select: {
      header: 'header',
      caption: 'caption',
    },
    prepare(selection) {
      const {header, caption} = selection
      const headerText = header ? header.join(' | ') : 'Table'
      return {
        title: caption || headerText,
        subtitle: 'Table',
      }
    },
  },
})