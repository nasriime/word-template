const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType, Table, 
    WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage59 = (obj)=>{

    // ************** table 14 ************

    const table = new Table({
        rows: 7,
        columns: 4,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

    table.getColumn(1).mergeCells(5, 6);
    table.getColumn(2).mergeCells(1, 3);


    // *********column 0*******
    table
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
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
    table
    .getCell(5, 0)
    .add(new Paragraph("5,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 0)
    .add(new Paragraph("6,0"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
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
    table
    .getCell(5, 1)
    .add(new Paragraph("5,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 2*******
    table
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table
    .getCell(1, 2)
    .add(new Paragraph("1,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 2)
    .add(new Paragraph("4,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 2)
    .add(new Paragraph("5,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 2)
    .add(new Paragraph("6,2"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 2*******
    table
    .getCell(0, 3)
    .add(new Paragraph("0,3"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table
    .getCell(1, 3)
    .add(new Paragraph("1,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 3)
    .add(new Paragraph("2,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 3)
    .add(new Paragraph("3,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 3)
    .add(new Paragraph("4,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 3)
    .add(new Paragraph("5,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 3)
    .add(new Paragraph("6,3"))
    .setVerticalAlign(VerticalAlign.CENTER);

   
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "9.2 Paramater Tuning",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:650
            },
        }),
        new Paragraph(""),
        table,
    ]
}


module.exports = createPage59;