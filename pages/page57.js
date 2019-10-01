const fs = require("fs");
const { Paragraph, TextRun, Table, WidthType, VerticalAlign, ShadingType, AlignmentType } = require("docx");

const createPage57 = (obj)=>{
        // ************** table ************
        const table = new Table({
            rows: 69,
            columns: 6,
            width: 100,
            widthUnitType: WidthType.PERCENTAGE,
        });
    
        // ********row 0*********
        table
        .getCell(0, 0)
        .add(new Paragraph({
            text: "MRBTS",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "4f81bd",
        });
        table
        .getCell(0, 1)
        .add(new Paragraph({
            text: "LNBTS",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "4f81bd",
        });
        table
        .getCell(0, 2)
        .add(new Paragraph({
            text: "LNCEL",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "4f81bd",
        });
        table
        .getCell(0, 3)
        .add(new Paragraph({
            text: "Angle",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "4f81bd",
        });
        table
        .getCell(0, 4)
        .add(new Paragraph({
            text: "Action",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "4f81bd",
        });
        table
        .getCell(0, 5)
        .add(new Paragraph({
            text: "Action Date",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "4f81bd",
        });

        // ********column 0*********
        for(var i=1; i<69 ;i++){
            table
            .getCell(i, 0)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }
        // ********column 1*********
        for(var i=1; i<69 ;i++){
            table
            .getCell(i, 1)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }
        // ********column 2*********
        for(var i=1; i<69 ;i++){
            table
            .getCell(i, 2)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }
        // ********column 3*********
        for(var i=1; i<69 ;i++){
            table
            .getCell(i, 3)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }

        // ********column 4*********
        for(var i=1; i<69 ;i++){
            table
            .getCell(i, 4)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }
       // ********column 5*********
       for(var i=1; i<69 ;i++){
            table
            .getCell(i, 5)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "9 Optimization Actions Taken",
                bold: true,
                size: 20
                })
            ],
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "9.1 Physical and power actions",
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


module.exports = createPage57;