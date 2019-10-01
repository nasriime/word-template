const { Paragraph, TextRun } = require('docx');

// eslint-disable-next-line no-unused-vars
const createPage56 = obj => [
  new Paragraph({
    text: '',
    pageBreakBefore: true,
  }),
  new Paragraph(''),
  new Paragraph({
    children: [
      new TextRun({
        text: '7.16 Plot of ENB Availbility',
        bold: true,
        size: 20,
      }),
    ],
    indent: {
      start: 1000,
    },
  }),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph({
    children: [
      new TextRun({
        text: '8 Plot of Traffic',
        bold: true,
        size: 20,
      }),
    ],
    indent: {
      start: 1000,
    },
  }),
  new Paragraph(''),
];

module.exports = createPage56;
