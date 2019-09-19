const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType, Table, 
    WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage61 = (obj)=>{

    // ************** table ************

    const table1 = new Table({
        rows: 15,
        columns: 4,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
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

    // *********column 2*******
    table1
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table1
    .getCell(1, 2)
    .add(new Paragraph("1,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 2)
    .add(new Paragraph("2,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 2)
    .add(new Paragraph("3,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 2)
    .add(new Paragraph("4,2"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 2*******
    table1
    .getCell(0, 3)
    .add(new Paragraph("0,3"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table1
    .getCell(1, 3)
    .add(new Paragraph("1,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 3)
    .add(new Paragraph("2,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 3)
    .add(new Paragraph("3,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 3)
    .add(new Paragraph("4,3"))
    .setVerticalAlign(VerticalAlign.CENTER);


    // ************** table ************

    const table2 = new Table({
        rows: 15,
        columns: 4,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
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

    // *********column 2*******
    table2
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table2
    .getCell(1, 2)
    .add(new Paragraph("1,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(2, 2)
    .add(new Paragraph("2,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(3, 2)
    .add(new Paragraph("3,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(4, 2)
    .add(new Paragraph("4,2"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 2*******
    table2
    .getCell(0, 3)
    .add(new Paragraph("0,3"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table2
    .getCell(1, 3)
    .add(new Paragraph("1,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(2, 3)
    .add(new Paragraph("2,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(3, 3)
    .add(new Paragraph("3,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(4, 3)
    .add(new Paragraph("4,3"))
    .setVerticalAlign(VerticalAlign.CENTER);

   
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "10.2.1 OSS KPIs (Band 700)",
                bold: true,
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
                text: "10.2.2 OSS KPIs (Band 1800)",
                bold: true,
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


module.exports = createPage61;