const { Paragraph, TextRun } = require('docx');

// eslint-disable-next-line no-unused-vars
const createPage51 = obj => [
  new Paragraph({
    text: '',
    pageBreakBefore: true,
  }),
  new Paragraph(''),
  new Paragraph({
    children: [
      new TextRun({
        text: '7 OSS KPIs on Cluster Level Results',
        bold: true,
        size: 23,
      }),
    ],
    indent: {
      start: 650,
    },
  }),
  new Paragraph(''),
  new Paragraph({
    children: [
      new TextRun({
        text: '7.1 Plot of DL MCS Allocated Average',
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
        text: '7.2 Plot of UL MCS Allocated Average',
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
        text: '7.3 Plot of CQI Distribution',
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

module.exports = createPage51;
