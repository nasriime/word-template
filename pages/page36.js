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

const createPage36 = (doc, obj) => {
  const image1 = Media.addImage(
    doc,
    fs.readFileSync(obj.image1Url),
    555,
    315,
    {},
  );
  const image2 = Media.addImage(
    doc,
    fs.readFileSync(obj.image2Url),
    555,
    315,
    {},
  );
  const image2Err = () => {
    if (obj.image2Error === '') {
      return new Paragraph({
        children: [image2],
        alignment: AlignmentType.CENTER,
      });
    }

    return new Paragraph({
      children: [
        new TextRun({
          text: obj.image2Error,
          size: 20,
        }),
      ],
      indent: {
        start: 1300,
      },
    });
  };

  // ************** table ************

  const table1 = new Table({
    rows: 9,
    columns: 3,
    width: 4535,
    widthUnitType: WidthType.DXA,
  });

  // *********column 0*******
  table1
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
  table1
    .getCell(1, 0)
    .add(
      new Paragraph({
        text: '(Min, -5)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(2, 0)
    .add(
      new Paragraph({
        text: '(-5, 0)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(3, 0)
    .add(
      new Paragraph({
        text: '(0, 5)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(4, 0)
    .add(
      new Paragraph({
        text: '(5, 10)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(5, 0)
    .add(
      new Paragraph({
        text: '(10, 15)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(6, 0)
    .add(
      new Paragraph({
        text: '(15, 20)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(7, 0)
    .add(
      new Paragraph({
        text: '(20, 25)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(8, 0)
    .add(
      new Paragraph({
        text: '(25, Max)',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  // ********column 1********
  table1
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
  table1
    .getCell(1, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_1_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(2, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_2_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(3, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_3_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(4, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_4_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(5, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_5_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(6, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_6_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(7, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_7_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(8, 1)
    .add(
      new Paragraph({
        text: obj.table.cell_8_1,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  // *******column 2*******
  table1
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
  table1
    .getCell(1, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_1_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(2, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_2_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(3, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_3_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(4, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_4_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(5, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_5_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(6, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_6_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(7, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_7_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table1
    .getCell(8, 2)
    .add(
      new Paragraph({
        text: obj.table.cell_8_2,
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  // ************** table ************

  const table2 = new Table({
    rows: 3,
    columns: 2,
    width: 4535,
    widthUnitType: WidthType.DXA,
  });

  // *********column 0*******
  table2
    .getCell(0, 0)
    .add(
      new Paragraph({
        text: '% of samples with 2 servers and 4dB',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
      fill: '42c5f4',
      val: ShadingType.PERCENT_95,
      color: '4f81bd',
    });
  table2
    .getCell(1, 0)
    .add(
      new Paragraph({
        text: '% of samples with 4 servers and 4dB',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table2
    .getCell(2, 0)
    .add(
      new Paragraph({
        text: '% of samples with 10 servers and 10dB',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);

  // ********column 1********
  table2
    .getCell(0, 1)
    .add(
      new Paragraph({
        text: '12.23',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
      fill: '42c5f4',
      val: ShadingType.PERCENT_95,
      color: '4f81bd',
    });
  table2
    .getCell(1, 1)
    .add(
      new Paragraph({
        text: '0.47',
        alignment: AlignmentType.CENTER,
      }),
    )
    .setVerticalAlign(VerticalAlign.CENTER);
  table2
    .getCell(2, 1)
    .add(
      new Paragraph({
        text: '0',
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
            '6.2.5.3 Table of legend vs. # of samples in each legend vs. percentage of samples of each legend',
          size: 20,
        }),
      ],
      indent: {
        start: 1000,
      },
    }),
    new Paragraph(''),
    table1,
    new Paragraph(''),
    new Paragraph({
      children: [
        new TextRun({
          text: '6.2.6 RFP Commitment',
          bold: true,
          size: 23,
        }),
      ],
      indent: {
        start: 650,
      },
    }),
    new Paragraph(''),
    table2,
    new Paragraph(''),
    new Paragraph({
      children: [
        new TextRun({
          text: '6.2.7 Intra Frequency Handover Success Rate Analysis',
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
          text: '6.2.7.1 Handover Plot',
          size: 20,
        }),
      ],
      indent: {
        start: 1000,
      },
    }),
    new Paragraph(''),
    new Paragraph({
      children: [image1],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph(''),
    new Paragraph({
      children: [
        new TextRun({
          text: '6.2.7.2 Handover Failures Plot',
          size: 20,
        }),
      ],
      indent: {
        start: 1000,
      },
    }),
    new Paragraph(''),
    image2Err(),
  ];
};

module.exports = createPage36;
