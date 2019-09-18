const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType, Table, 
    WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage50 = (doc, obj)=>{

    // ************** table 14 ************

    const table1 = new Table({
        rows: 5,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });


    // *********column 0*******
    table1
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table1
    .getCell(1, 0)
    .add(new Paragraph("1,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 0)
    .add(new Paragraph("2,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 0)
    .add(new Paragraph("3,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 0)
    .add(new Paragraph("4,0"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    table1
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table1
    .getCell(1, 1)
    .add(new Paragraph("1,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 1)
    .add(new Paragraph("2,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 1)
    .add(new Paragraph("3,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 1)
    .add(new Paragraph("4,1"))
    .setVerticalAlign(VerticalAlign.CENTER);


    // ************** table 15 ************

    const table2 = new Table({
        rows: 5,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });


    // *********column 0*******
    table2
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table2
    .getCell(1, 0)
    .add(new Paragraph("1,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(2, 0)
    .add(new Paragraph("2,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(3, 0)
    .add(new Paragraph("3,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(4, 0)
    .add(new Paragraph("4,0"))
    .setVerticalAlign(VerticalAlign.CENTER);

      // ********column 1********
      table2
      .getCell(0, 1)
      .add(new Paragraph("0,1"))
      .setVerticalAlign(VerticalAlign.CENTER)
      .setShading({
          fill: "42c5f4",
          val: ShadingType.PERCENT_95,
          color: "auto",
      })
      table2
      .getCell(1, 1)
      .add(new Paragraph("1,1"))
      .setVerticalAlign(VerticalAlign.CENTER);
      table2
      .getCell(2, 1)
      .add(new Paragraph("2,1"))
      .setVerticalAlign(VerticalAlign.CENTER);
      table2
      .getCell(3, 1)
      .add(new Paragraph("3,1"))
      .setVerticalAlign(VerticalAlign.CENTER);
      table2
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
                text: "6.3.7 YouTube Video Streaming Results",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:300
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.7.1 Network Delay Test Results",
                size: 20
                })
            ],
            indent:{
                start:650
            },
        }),
        new Paragraph(""),
        table1,
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.7.2 Web Browsing Test Results",
                size: 20
                })
            ],
            indent:{
                start:650
            },
        }),    
        new Paragraph(""),
        table2,
    ]
}


module.exports = createPage50;