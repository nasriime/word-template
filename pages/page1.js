const fs = require("fs");
const { Media, Paragraph, AlignmentType, HeadingLevel, TextRun,
        Table, WidthType, VerticalAlign } = require("docx");

const createPage1=(doc,obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url),50,50, {
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
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url),50,50, {
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
    .add(new Paragraph({
        text:"Optimization Cluster No.:",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(1, 0)
    .add(new Paragraph({
        text:"No. of Sites:",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 0)
    .add(new Paragraph({
        text:"City:",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 0)
    .add(new Paragraph({
        text:"DT Period (Day)",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 0)
    .add(new Paragraph({
        text:"Produced by:",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 0)
    .add(new Paragraph({
        text:"Approved by:",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    table
    .getCell(0, 1)
    .add(new Paragraph({
        text:obj.cell_0_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(1, 1)
    .add(new Paragraph({
        text:obj.cell_1_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 1)
    .add(new Paragraph({
        text:obj.cell_2_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 1)
    .add(new Paragraph("Start:"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 1)
    .add(new Paragraph("End:"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 1)
    .add(new Paragraph({
        text:obj.cell_5_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 1)
    .add(new Paragraph({
        text:obj.cell_6_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*******
    table
    .getCell(0, 2)
    .add(new Paragraph("Clutter Type:"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 2)
    .add(new Paragraph("Area:"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 2)
    .add(new Paragraph({
        text:obj.cell_3_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 2)
    .add(new Paragraph({
        text:obj.cell_4_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 2)
    .add(new Paragraph("Date:"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 2)
    .add(new Paragraph("Date:"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 3*********
    table
    .getCell(0, 3)
    .add(new Paragraph({
        text:obj.cell_0_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(1, 3)
    .add(new Paragraph({
        text:obj.cell_1_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 3)
    .add(new Paragraph({
        text:obj.cell_2_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 3)
    .add(new Paragraph("DT Period(Time)"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 3)
    .add(new Paragraph({
        text:obj.cell_5_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 3)
    .add(new Paragraph({
        text:obj.cell_6_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 4*********
    table
    .getCell(3, 4)
    .add(new Paragraph("Start:"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 4)
    .add(new Paragraph("End:"))
    .setVerticalAlign(VerticalAlign.CENTER);
    
    // ********column 5*********
    table
    .getCell(3, 5)
    .add(new Paragraph({
        text:obj.cell_3_5,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 5)
    .add(new Paragraph({
        text:obj.cell_4_5,
        alignment: AlignmentType.CENTER,
    }))
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