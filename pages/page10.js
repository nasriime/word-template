const fs = require("fs");
const { Paragraph, Table, WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage10=(obj)=>{

    // ************** table 7 ************

    const table = new Table({
        rows: 16,
        columns: 11,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

    // *********row 0*******

    table
    .getCell(0, 0)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })

    table
    .getCell(0, 1)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 2)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 3)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });

    table
    .getCell(0, 4)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });

    table
    .getCell(0, 5)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 6)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 7)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 8)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 9)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 10)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });

    // *********column 0*******
    table
    .getCell(1, 0)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 0)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 0)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 0)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 0)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    table
    .getCell(3, 1)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 1)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*******
    table
    .getCell(1, 1)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 1)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 2)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 2)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 1)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 1)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*********
    table
    .getCell(0, 2)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(1, 2)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 2)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 2)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 2)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 3*********
    table
    .getCell(0, 3)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(1, 3)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 3)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 3)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 3)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 3)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 3)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 4*********
    table
    .getCell(3, 4)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 4)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    

    // ********column 5*********
    table
    .getCell(3, 5)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 5)
    .add(new Paragraph("  "))
    .setVerticalAlign(VerticalAlign.CENTER);

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        table
    ]
}


module.exports = createPage10;