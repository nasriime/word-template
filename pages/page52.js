const { Paragraph, TextRun } = require('docx');

// eslint-disable-next-line no-unused-vars
const createPage52 = obj => [
  new Paragraph({
    text: '',
    pageBreakBefore: true,
  }),
  new Paragraph(''),
  new Paragraph({
    children: [
      new TextRun({
        text: '7.4 Plot of RACH Success Rate',
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
        text: '7.5 Plot of RRC Connection Setup Success Rate',
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
        text: '7.6 Plot of CSFB Setup Success Rate',
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

module.exports = createPage52;
