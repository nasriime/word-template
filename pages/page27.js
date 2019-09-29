const fs = require('fs');
const {
  Media,
  Paragraph,
  TextRun,
  AlignmentType,
  Table,
  WidthType,
  VerticalAlign,
  ShadingType,
} = require('docx');

const createPage27 = (doc, obj) => {
  const image = Media.addImage(
    doc,
    fs.readFileSync(obj.imageUrl),
    555,
    315,
    {},
  );

  // ************** table ************

  const table = new Table({
    rows: 5,
    columns: 2,
    width: 4535,
    widthUnitType: WidthType.DXA,
  });

  // *********column 0*******
  table
    .getCell(0, 0)
    .add(
      new Paragraph({
        text: 'Voice Call Success Ratio',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
      fill: '42c5f4',
      val: ShadingType.PERCENT_95,
      color: '4f81bd',
    });
  table
    .getCell(1, 0)
    .add(
      new Paragraph({
        text: 'Call Setup Failure Ratio',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(2, 0)
    .add(
      new Paragraph({
        text: 'Dropped Call Ratio',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(3, 0)
    .add(
      new Paragraph({
        text: 'Call Setup Time [s]',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(4, 0)
    .add(
      new Paragraph({
        text: 'CSFB Time [s]',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  // ********column 1********
  table
    .getCell(0, 1)
    .add(
      new Paragraph({
        text: '100%',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
      fill: '42c5f4',
      val: ShadingType.PERCENT_95,
      color: '4f81bd',
    });
  table
    .getCell(1, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_1_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(2, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_2_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(3, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_3_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(4, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_4_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  return [
    new Paragraph({
      text: '',
      pageBreakBefore: true,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: '6.1.10 Short Call Test ',
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
          text: '6.1.10.1 Short Call Test Results',
          size: 20,
        }),
      ],
      indent: {
        start: 1000,
      },
    }),
    new Paragraph(''),
    table,
    new Paragraph(''),
    new Paragraph({
      children: [
        new TextRun({
          text: '6.1.10.2 Short Call Test Plot',
          size: 20,
        }),
      ],
      indent: {
        start: 1000,
      },
    }),
    new Paragraph(''),
    new Paragraph({
      children: [image],
      alignment: AlignmentType.CENTER,
    }),
  ];
};

module.exports = createPage27;
