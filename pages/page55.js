const { Paragraph, TextRun } = require('docx');

// eslint-disable-next-line no-unused-vars
const createPage55 = obj => [
  new Paragraph({
    text: '',
    pageBreakBefore: true,
  }),
  new Paragraph(''),
  new Paragraph({
    children: [
      new TextRun({
        text: '7.13 Plot of Average Uplink PDCP User Throughput @ 5 MHz',
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
        text: '7.14 Plot of Downlink BLER',
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
        text: '7.15 Plot of Uplink BLER',
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

module.exports = createPage55;
