const fs = require("fs");
const { Media, Paragraph, TextRun, Table, WidthType, VerticalAlign, ShadingType, AlignmentType } = require("docx");

const createPage49 = (doc, obj)=>{

    const image = Media.addImage(doc, fs.readFileSync(obj.imageUrl), 555, 315, {});

    // ************** table ************

    const table = new Table({
        rows: 10,
        columns: 3,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });


    // *********column 0*******
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
    table
    .getCell(9, 0)
    .add(new Paragraph("9,0"))
    .setVerticalAlign(VerticalAlign.CENTER);


    // ********column 1********
    table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
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
    table
    .getCell(9, 1)
    .add(new Paragraph("9,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*******
    table
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })
    table
    .getCell(1, 2)
    .add(new Paragraph("1,2"))
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
    table
    .getCell(7, 2)
    .add(new Paragraph("7,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(8, 2)
    .add(new Paragraph("8,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    table
    .getCell(9, 2)
    .add(new Paragraph("9,2"))
    .setVerticalAlign(VerticalAlign.CENTER);

    
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.5.3 Table of legend vs. # of samples in each legend vs. percentage of samples of each legend",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        table,
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.6 Intra Frequency Handover Success Rate Analysis",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:650
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.6.1 Handover Plot",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image],
            alignment: AlignmentType.CENTER,
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.6.2 Handover Failures Plot",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "No Handover Failures Plot",
                size: 20
                })
            ],
            indent:{
                start:1300
            },
        }),
    ]
}


module.exports = createPage49;