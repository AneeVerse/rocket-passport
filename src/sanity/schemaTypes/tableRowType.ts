import {defineType, defineField} from 'sanity'

export const tableRowType = defineType({
  name: 'tableRow',
  title: 'Table Row',
  type: 'object',
  fields: [
    defineField({
      name: 'cells',
      title: 'Row Cells',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Data cells for this row',
    }),
  ],
  preview: {
    select: {
      cells: 'cells',
    },
    prepare(selection) {
      const {cells} = selection
      const cellText = cells ? cells.join(' | ') : 'Row'
      return {
        title: cellText,
        subtitle: 'Table Row',
      }
    },
  },
})