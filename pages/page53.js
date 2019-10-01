const { Paragraph, TextRun } = require('docx');

// eslint-disable-next-line no-unused-vars
const createPage53 = obj => [
  new Paragraph({
    text: '',
    pageBreakBefore: true,
  }),
  new Paragraph(''),
  new Paragraph({
    children: [
      new TextRun({
        text: '7.7 Plot of ERAB Drop Rate',
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
        text: '7.8 Plot of LTE Intra-frequency HO Success Rate',
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
        text: '7.9 Plot of LTE Inter-frequency HO Success Rate',
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

module.exports = createPage53;
