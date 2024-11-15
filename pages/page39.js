const fs = require('fs');
const {
  Media,
  Paragraph,
  TextRun,
  Table,
  WidthType,
  VerticalAlign,
  ShadingType,
  AlignmentType,
} = require('docx');

const createPage39 = (doc, obj) => {
  const image = Media.addImage(
    doc,
    fs.readFileSync(obj.imageUrl),
    555,
    315,
    {},
  );

  // ************** table ************

  const table = new Table({
    rows: 9,
    columns: 3,
    width: 4535,
    widthUnitType: WidthType.DXA,
  });

  // *********column 0*******
  table
    .getCell(0, 0)
    .add(
      new Paragraph({
        text: 'Legend',
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
        text: '(Min, 500)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(2, 0)
    .add(
      new Paragraph({
        text: '(500, 1000)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(3, 0)
    .add(
      new Paragraph({
        text: '(1000, 5000)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(4, 0)
    .add(
      new Paragraph({
        text: '(5000, 10000)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(5, 0)
    .add(
      new Paragraph({
        text: '(10000, 15000)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(6, 0)
    .add(
      new Paragraph({
        text: '(15000, 20000)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(7, 0)
    .add(
      new Paragraph({
        text: '(20000, 25000)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(8, 0)
    .add(
      new Paragraph({
        text: '(25000, Max)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  // ********column 1********
  table
    .getCell(0, 1)
    .add(
      new Paragraph({
        text: 'Number of samples',
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
  table
    .getCell(5, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_5_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(6, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_6_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(7, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_7_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(8, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_8_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  // *******column 2*******
  table
    .getCell(0, 2)
    .add(
      new Paragraph({
        text: 'Percentage of samples',
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
    .getCell(1, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_1_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(2, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_2_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(3, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_3_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(4, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_4_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(5, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_5_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(6, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_6_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(7, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_7_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table
    .getCell(8, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_8_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  return [
    new Paragraph({
      text: '',
      pageBreakBefore: true,
    }),
    new Paragraph(''),
    new Paragraph({
      children: [
        new TextRun({
          text:
            '6.2.8.3 Table of legend vs. # of samples in each legend vs. percentage of samples of each legend',
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
    new Paragraph(''),
    new Paragraph({
      children: [
        new TextRun({
          text: '6.2.8.4 Plot of FTP file DL Radio Access Technology',
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

module.exports = createPage39;
