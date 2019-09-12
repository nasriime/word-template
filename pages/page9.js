const fs = require("fs");
const {  Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType} = require("docx");

const createPage9=(obj)=>{

    // ************** table6 ************

    const page6Table = new Table({
        rows: 16,
        columns: 11,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

    // *********row 0*******

    page6Table
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })

    page6Table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

    // *********column 0*******
    page6Table
    .getCell(1, 0)
    .add(new Paragraph("1,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(2, 0)
    .add(new Paragraph("2,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(3, 0)
    .add(new Paragraph("3,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(5, 0)
    .add(new Paragraph("5,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(6, 0)
    .add(new Paragraph("6,0"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    page6Table
    .getCell(3, 1)
    .add(new Paragraph("3,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(4, 1)
    .add(new Paragraph("4,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*******
    page6Table
    .getCell(1, 1)
    .add(new Paragraph("1,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(2, 1)
    .add(new Paragraph("2,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(3, 2)
    .add(new Paragraph("3,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(4, 2)
    .add(new Paragraph("4,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(5, 1)
    .add(new Paragraph("5,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(6, 1)
    .add(new Paragraph("6,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*********
    page6Table
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(1, 2)
    .add(new Paragraph("1,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(2, 2)
    .add(new Paragraph("2,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(5, 2)
    .add(new Paragraph("5,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(6, 2)
    .add(new Paragraph("6,2"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 3*********
    page6Table
    .getCell(0, 3)
    .add(new Paragraph("0,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(1, 3)
    .add(new Paragraph("1,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(2, 3)
    .add(new Paragraph("2,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(3, 3)
    .add(new Paragraph("3,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(4, 3)
    .add(new Paragraph("4,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(5, 3)
    .add(new Paragraph("5,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(6, 3)
    .add(new Paragraph("6,3"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 4*********
    page6Table
    .getCell(3, 4)
    .add(new Paragraph("3,4"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(4, 4)
    .add(new Paragraph("4,4"))
    .setVerticalAlign(VerticalAlign.CENTER);
    

    // ********column 5*********
    page6Table
    .getCell(3, 5)
    .add(new Paragraph("3,5"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page6Table
    .getCell(4, 5)
    .add(new Paragraph("4,5"))
    .setVerticalAlign(VerticalAlign.CENTER);

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph("Cluster Site List"),
        page6Table
    ]
}


module.exports = createPage9;