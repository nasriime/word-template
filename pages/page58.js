const fs = require("fs");
const { Paragraph, Table, WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage58 = (obj)=>{
        // ************** table ************
        const table = new Table({
            rows: 34,
            columns: 6,
            width: 4535,
            widthUnitType: WidthType.DXA,
        });
    
        // ********column 0*********
        table
        .getCell(0, 0)
        .add(new Paragraph("0,0"))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "4f81bd",
        });
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
        table
        .getCell(7, 0)
        .add(new Paragraph("7,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        table
        .getCell(8, 0)
        .add(new Paragraph("8,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
    
        // ********column 1*********
        table
        .getCell(0, 1)
        .add(new Paragraph("0,1"))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "4f81bd",
        });
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
        table
        .getCell(6, 1)
        .add(new Paragraph("6,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        table
        .getCell(7, 1)
        .add(new Paragraph("7,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        table
        .getCell(8, 1)
        .add(new Paragraph("8,1"))
        .setVerticalAlign(VerticalAlign.CENTER);

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        table,
    ]
}


module.exports = createPage58;