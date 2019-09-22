const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType, Table, 
    WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage43 = (doc, obj)=>{

    const image = Media.addImage(doc, fs.readFileSync(obj.imageUrl), 555, 315, {});

    // ************** table 14 ************

    const table = new Table({
        rows: 5,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });


    // *********column 0*******
    table
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table
    .getCell(1, 0)
    .add(new Paragraph("1,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 0)
    .add(new Paragraph("2,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 0)
    .add(new Paragraph("3,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 0)
    .add(new Paragraph("4,0"))
    .setVerticalAlign(VerticalAlign.CENTER);

      // ********column 1********
      table
      .getCell(0, 1)
      .add(new Paragraph("0,1"))
      .setVerticalAlign(VerticalAlign.CENTER)
      .setShading({
          fill: "42c5f4",
          val: ShadingType.PERCENT_95,
          color: "auto",
      })
      table
      .getCell(1, 1)
      .add(new Paragraph("1,1"))
      .setVerticalAlign(VerticalAlign.CENTER);
      table
      .getCell(2, 1)
      .add(new Paragraph("2,1"))
      .setVerticalAlign(VerticalAlign.CENTER);
      table
      .getCell(3, 1)
      .add(new Paragraph("3,1"))
      .setVerticalAlign(VerticalAlign.CENTER);
      table
      .getCell(4, 1)
      .add(new Paragraph("4,1"))
      .setVerticalAlign(VerticalAlign.CENTER);

   
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.10 Short Call Test",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:650
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.10.1 Short Call Test Results",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        table,
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.10.2 Short Call Test Plot",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image],
            alignment: AlignmentType.CENTER,
        })     
    ]
}


module.exports = createPage43;