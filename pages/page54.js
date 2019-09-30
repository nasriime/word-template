const { Paragraph, TextRun } = require('docx');

// eslint-disable-next-line no-unused-vars
const createPage54 = obj => [
  new Paragraph({
    text: '',
    pageBreakBefore: true,
  }),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph(''),
  new Paragraph({
    children: [
      new TextRun({
        text: '7.10 Plot of Average Downlink PDCP User Throughput @ 10 MHz',
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
  new Paragraph({
    children: [
      new TextRun({
        text: '7.11 Plot of Average Uplink PDCP User Throughput @ 10 MHz',
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
  new Paragraph({
    children: [
      new TextRun({
        text: '7.12 Plot of Average Downlink PDCP User Throughput @ 5 MHz',
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

module.exports = createPage54;
