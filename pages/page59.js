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
    .add(new Paragraph("Paramter Name"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table
    .getCell(1, 0)
    .add(new Paragraph({
        text: obj.cell_1_0,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 0)
    .add(new Paragraph({
        text: obj.cell_2_0,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 0)
    .add(new Paragraph({
        text: obj.cell_3_0,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 0)
    .add(new Paragraph({
        text: obj.cell_4_0,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 0)
    .add(new Paragraph({
        text: obj.cell_5_0,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 0)
    .add(new Paragraph({
        text: obj.cell_6_0,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    table
    .getCell(0, 1)
    .add(new Paragraph("Action"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table
    .getCell(1, 1)
    .add(new Paragraph({
        text: obj.cell_1_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 1)
    .add(new Paragraph({
        text: obj.cell_2_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 1)
    .add(new Paragraph({
        text: obj.cell_3_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 1)
    .add(new Paragraph({
        text: obj.cell_4_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 1)
    .add(new Paragraph({
        text: obj.cell_5_1,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 2*******
    table
    .getCell(0, 2)
    .add(new Paragraph("Observation"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table
    .getCell(1, 2)
    .add(new Paragraph({
        text: obj.cell_1_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 2)
    .add(new Paragraph({
        text: obj.cell_4_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 2)
    .add(new Paragraph({
        text: obj.cell_5_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 2)
    .add(new Paragraph({
        text: obj.cell_6_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 3*******
    table
    .getCell(0, 3)
    .add(new Paragraph("Date"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table
    .getCell(1, 3)
    .add(new Paragraph({
        text: obj.cell_1_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(2, 3)
    .add(new Paragraph({
        text: obj.cell_2_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(3, 3)
    .add(new Paragraph({
        text: obj.cell_3_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(4, 3)
    .add(new Paragraph({
        text: obj.cell_4_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(5, 3)
    .add(new Paragraph({
        text: obj.cell_5_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(6, 3)
    .add(new Paragraph({
        text: obj.cell_6_3,
        alignment: AlignmentType.CENTER,
    }))
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