const fs = require("fs");
const {  Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType} = require("docx");

const doc = new Document(undefined, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
});




    // ************** table1 ************

    const page1Table = new Table({
        rows: 7,
        columns: 6,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

    page1Table.getRow(0).mergeCells(0, 1);
    page1Table.getRow(0).mergeCells(2, 3);

    page1Table.getRow(1).mergeCells(0, 1);
    page1Table.getRow(1).mergeCells(2, 3);

    page1Table.getRow(2).mergeCells(0, 1);
    page1Table.getRow(2).mergeCells(2, 3);

    page1Table.getRow(5).mergeCells(0, 1);
    page1Table.getRow(5).mergeCells(2, 3);

    page1Table.getRow(6).mergeCells(0, 1);
    page1Table.getRow(6).mergeCells(2, 3);

    page1Table.getColumn(0).mergeCells(3, 4);
    page1Table.getColumn(2).mergeCells(0, 1);

    // *********column 0*******
    page1Table
    .getCell(0, 0)
    .add(new Paragraph("Optimization Cluster No.:"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(1, 0)
    .add(new Paragraph("1,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(2, 0)
    .add(new Paragraph("2,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(3, 0)
    .add(new Paragraph("3,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(5, 0)
    .add(new Paragraph("5,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(6, 0)
    .add(new Paragraph("6,0"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    page1Table
    .getCell(3, 1)
    .add(new Paragraph("3,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(4, 1)
    .add(new Paragraph("4,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*******
    page1Table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(1, 1)
    .add(new Paragraph("1,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(2, 1)
    .add(new Paragraph("2,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(3, 2)
    .add(new Paragraph("3,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(4, 2)
    .add(new Paragraph("4,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(5, 1)
    .add(new Paragraph("5,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(6, 1)
    .add(new Paragraph("6,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*********
    page1Table
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(1, 2)
    .add(new Paragraph("1,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(2, 2)
    .add(new Paragraph("2,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(5, 2)
    .add(new Paragraph("5,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(6, 2)
    .add(new Paragraph("6,2"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 3*********
    page1Table
    .getCell(0, 3)
    .add(new Paragraph("0,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(1, 3)
    .add(new Paragraph("1,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(2, 3)
    .add(new Paragraph("2,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(3, 3)
    .add(new Paragraph("3,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(4, 3)
    .add(new Paragraph("4,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(5, 3)
    .add(new Paragraph("5,3"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(6, 3)
    .add(new Paragraph("6,3"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // column 4
    page1Table
    .getCell(3, 4)
    .add(new Paragraph("3,4"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(4, 4)
    .add(new Paragraph("4,4"))
    .setVerticalAlign(VerticalAlign.CENTER);
    

    //column 5
    page1Table
    .getCell(3, 5)
    .add(new Paragraph("3,5"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(4, 5)
    .add(new Paragraph("4,5"))
    .setVerticalAlign(VerticalAlign.CENTER);


const crearePage1=(doc,obj)=>{

    const image3 = Media.addImage(doc, fs.readFileSync("./bg2.jpg"),50,50, {
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
    
    const image4 = Media.addImage(doc, fs.readFileSync("./bg2.jpg"),50,50, {
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
    return [
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [image3, image4],
            alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
            text: "Cluster Acceptance Report",
            alignment: AlignmentType.CENTER,
            heading	: HeadingLevel.TITLE
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        page1Table,
    ]
}


module.exports = crearePage1;