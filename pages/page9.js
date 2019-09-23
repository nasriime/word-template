const fs = require("fs");
const { Paragraph, Table, WidthType, TextRun, VerticalAlign, ShadingType } = require("docx");

const createPage9=(obj)=>{

    // ************** table 6 ************

    const table = new Table({
        rows: 16,
        columns: 11,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

    // *********row 0*******

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
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });
    table
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });
    table
    .getCell(0, 3)
    .add(new Paragraph("0,3"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

    table
    .getCell(0, 4)
    .add(new Paragraph("0,4"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

    table
    .getCell(0, 5)
    .add(new Paragraph("0,5"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });
    table
    .getCell(0, 6)
    .add(new Paragraph("0,6"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });
    table
    .getCell(0, 7)
    .add(new Paragraph("0,7"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });
    table
    .getCell(0, 8)
    .add(new Paragraph("0,8"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });
    table
    .getCell(0, 9)
    .add(new Paragraph("0,9"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });
    table
    .getCell(0, 10)
    .add(new Paragraph("0,10"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

    // *********column 0*******
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
    .getCell(5, 0)
    .add(new Paragraph("5,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 0)
    .add(new Paragraph("6,0"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    table
    .getCell(3, 1)
    .add(new Paragraph("3,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 1)
    .add(new Paragraph("4,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*******
    table
    .getCell(1, 1)
    .add(new Paragraph("1,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 1)
    .add(new Paragraph("2,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 2)
    .add(new Paragraph("3,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 2)
    .add(new Paragraph("4,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 1)
    .add(new Paragraph("5,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 1)
    .add(new Paragraph("6,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*********
    table
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(1, 2)
    .add(new Paragraph("1,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 2)
    .add(new Paragraph("2,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 2)
    .add(new Paragraph("5,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 2)
    .add(new Paragraph("6,2"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 3*********
    table
    .getCell(0, 3)
    .add(new Paragraph("0,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
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

    // ********column 4*********
    table
    .getCell(3, 4)
    .add(new Paragraph("3,4"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 4)
    .add(new Paragraph("4,4"))
    .setVerticalAlign(VerticalAlign.CENTER);
    

    // ********column 5*********
    table
    .getCell(3, 5)
    .add(new Paragraph("3,5"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 5)
    .add(new Paragraph("4,5"))
    .setVerticalAlign(VerticalAlign.CENTER);

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "Cluster Site List",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:300
            },
        }),
        new Paragraph(""),
        table
    ]
}


module.exports = createPage9;