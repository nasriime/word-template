const fs = require("fs");
const { Media, Paragraph, AlignmentType, HeadingLevel, TextRun,
        Table, WidthType, VerticalAlign } = require("docx");

const createPage1=(doc,obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync("./images/bg2.jpg"),50,50, {
        // floating: {
        //     horizontalPosition: {
        //         relative: HorizontalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: HorizontalPositionAlign.RIGHT
        //     },
        //     verticalPosition: {
        //         relative: VerticalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: VerticalPositionAlign.TOP,
        //     },
        //     margins: {
        //         bottom: 201440,
        //     },
        // },
    });
    
    const image2 = Media.addImage(doc, fs.readFileSync("./images/bg2.jpg"),50,50, {
        // floating: {
        //     horizontalPosition: {
        //         relative: HorizontalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: HorizontalPositionAlign.LEFT
        //     },
        //     verticalPosition: {
        //         relative: VerticalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: VerticalPositionAlign.TOP,
        //     },
        //     margins: {
        //         bottom: 201440,
        //     },
        // },
    });

    // ************** table 1 ************

    const table = new Table({
        rows: 7,
        columns: 6,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

    table.getRow(0).mergeCells(0, 1);
    table.getRow(0).mergeCells(2, 3);

    table.getRow(1).mergeCells(0, 1);
    table.getRow(1).mergeCells(2, 3);

    table.getRow(2).mergeCells(0, 1);
    table.getRow(2).mergeCells(2, 3);

    table.getRow(5).mergeCells(0, 1);
    table.getRow(5).mergeCells(2, 3);

    table.getRow(6).mergeCells(0, 1);
    table.getRow(6).mergeCells(2, 3);

    table.getColumn(0).mergeCells(3, 4);
    table.getColumn(2).mergeCells(0, 1);
    table.getColumn(3).mergeCells(3, 4);

    // *********column 0*******
    table
    .getCell(0, 0)
    .add(new Paragraph("Optimization Cluster No.:"))
    .setVerticalAlign(VerticalAlign.CENTER);
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
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
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

    // *******column 2*******
    table
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 2)
    .add(new Paragraph("2,2"))
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
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children:[new TextRun({
                text: "Cluster Acceptance Report",
                bold: true
            })],
            alignment: AlignmentType.CENTER,
            heading	: HeadingLevel.TITLE
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [
                image1, 
                new TextRun({
                    text: "                         ",
                }),
                image2
            ],
            alignment: AlignmentType.CENTER,
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        table,
    ]
}


module.exports = createPage1;