const {
    Paragraph,
    TextRun,
    Table,
    WidthType,
    VerticalAlign,
    ShadingType,
    AlignmentType,
    BorderStyle,
  } = require('docx');
  
  const crearePage8 = obj => {
    // ************** table ************
    const table = new Table({
      rows: 9,
      columns: 2,
      width: 4535,
      widthUnitType: WidthType.DXA,
    });
  
    // ********column 0*********
    table
      .getCell(0, 0)
      .add(
        new Paragraph({
          text: 'Index',
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
          text: '2',
          alignment: AlignmentType.CENTER,
        }),
      )
      .setVerticalAlign(VerticalAlign.CENTER);
    table
      .getCell(2, 0)
      .add(
        new Paragraph({
          text: 'Index',
          alignment: AlignmentType.CENTER,
        }),
      )
      .setVerticalAlign(VerticalAlign.CENTER);
    table
      .getCell(3, 0)
      .add(
        new Paragraph({
          text: '2',
          alignment: AlignmentType.CENTER,
        }),
      )
      .setVerticalAlign(VerticalAlign.CENTER);
    table
      .getCell(4, 0)
      .add(
        new Paragraph({
          text: 'Index',
          alignment: AlignmentType.CENTER,
        }),
      )
      .setVerticalAlign(VerticalAlign.CENTER);
    table
      .getCell(5, 0)
      .add(
        new Paragraph({
          text: '2',
          alignment: AlignmentType.CENTER,
        }),
      )
      .setVerticalAlign(VerticalAlign.CENTER);
    table
      .getCell(6, 0)
      .add(
        new Paragraph({
          text: '2',
          alignment: AlignmentType.CENTER,
        }),
      )
      .setVerticalAlign(VerticalAlign.CENTER);
    table
      .getCell(7, 0)
      .add(
        new Paragraph({
          text: '3',
          alignment: AlignmentType.CENTER,
        }),
      )
      .setVerticalAlign(VerticalAlign.CENTER);
    table
      .getCell(8, 0)
      .add(
        new Paragraph({
          text: '4',
          alignment: AlignmentType.CENTER,
        }),
      )
      .setVerticalAlign(VerticalAlign.CENTER);
  
    // ********column 1*********
  
    table
      .getCell(0, 1)
      .add(
        new Paragraph({
          text: 'Software',
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


      // ************** table ************
     const table2 = new Table({
      rows: 1,
      columns: 1,
      width: 100,
      widthUnitType: WidthType.PERCENTAGE,
      margins: {
        left: 2500,
      },
    });

    table2
    .getCell(0, 0)
    .add(
      new Paragraph({
        children: [
          table,
        ],
    }),
    )
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
      fill: 'ffffff',
      val: ShadingType.PERCENT_95,
      color: 'ffffff',
    })
    .Borders
        .addTopBorder({
          style: BorderStyle.THICK,
          size: 20,
          color: "4f81bd"
        })
        .addBottomBorder({
          style: BorderStyle.THICK,
          size: 20,
          color: "4f81bd"
        })
        .addStartBorder({
          style: BorderStyle.THICK,
          size: 20,
          color: "4f81bd"
        })
        .addEndBorder({
          style: BorderStyle.THICK,
          size: 20,
          color: "4f81bd"
        });
  
    return [
      new Paragraph({
        text: '',
        pageBreakBefore: true,
      }),
      new Paragraph(''),
      new Paragraph(''),
      new Paragraph(''),
      new Paragraph(''),
      new Paragraph(''),
      new Paragraph(''),
      new Paragraph({
        children: [
          new TextRun({
            text: '5 Drive Test Definition',
            bold: true,
          }),
        ],
      }),
      new Paragraph(''),
      new Paragraph(''),
      new Paragraph({
        children: [
          new TextRun({
            text: '5.1 Drive Test devices',
            bold: true,
          }),
        ],
      }),
      new Paragraph(''),
      new Paragraph(
        'The followings are the general tools configuration of the drive test.',
      ),
      new Paragraph(''),
      table,
      new Paragraph(''),
      table2,
    ];
  };
  
  module.exports = crearePage8;
  