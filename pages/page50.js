const fs = require("fs");
const { Paragraph, TextRun, AlignmentType, Table, WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage50 = (doc, obj)=>{

     // ************** table ************

     const table1 = new Table({
        rows: 5,
        columns: 2,
        width: 6535,
        widthUnitType: WidthType.DXA,
    });

    // *********column 0*******
    table1
    .getCell(0, 0)
    .add(new Paragraph({
        text: "Network Delay [Latency ms] (Mean)",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table1
    .getCell(1, 0)
    .add(new Paragraph({
        text: "YouTube Playouts Reproduction without Interruption [%]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 0)
    .add(new Paragraph({
        text: "YouTube Playouts with major interruptions [%]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 0)
    .add(new Paragraph({
        text: "YouTube Video Start Time [s]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 0)
    .add(new Paragraph({
        text: "HD YouTube Video Playout Waiting Time [s]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

     // ********column 1********
     table1
     .getCell(0, 1)
     .add(new Paragraph({
        text: obj.table1.cell_0_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER)
     .setShading({
         fill: "42c5f4",
         val: ShadingType.PERCENT_95,
         color: "4f81bd",
     })
     table1
     .getCell(1, 1)
     .add(new Paragraph({
        text: obj.table1.cell_1_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table1
     .getCell(2, 1)
     .add(new Paragraph({
        text: obj.table1.cell_2_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table1
     .getCell(3, 1)
     .add(new Paragraph({
        text: obj.table1.cell_3_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table1
     .getCell(4, 1)
     .add(new Paragraph({
        text: obj.table1.cell_4_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER);


    // ************** table ************

    const table2 = new Table({
        rows: 5,
        columns: 2,
        width: 6535,
        widthUnitType: WidthType.DXA,
    });

    // *********column 0*******
    table2
    .getCell(0, 0)
    .add(new Paragraph({
        text: "Browsing Session Time [s]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table2
    .getCell(1, 0)
    .add(new Paragraph({
        text: "Browsing DNS Time [s]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(2, 0)
    .add(new Paragraph({
        text: "Browsing Service Access Time [s]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(3, 0)
    .add(new Paragraph({
        text: "Browsing Transfer Time [s]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table2
    .getCell(4, 0)
    .add(new Paragraph({
        text: "Downloaded Web Page Size [KB]",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

     // ********column 1********
     table2
     .getCell(0, 1)
     .add(new Paragraph({
        text: obj.table2.cell_0_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER)
     table2
     .getCell(1, 1)
     .add(new Paragraph({
        text: obj.table2.cell_1_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table2
     .getCell(2, 1)
     .add(new Paragraph({
        text: obj.table2.cell_3_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table2
     .getCell(3, 1)
     .add(new Paragraph({
        text: obj.table2.cell_3_1,
        alignment: AlignmentType.CENTER,
    }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table2
     .getCell(4, 1)
     .add(new Paragraph({
        text: obj.table2.cell_4_1,
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
                text: "6.3.7 YouTube Video Streaming Results",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:300
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.7.1 Network Delay Test Results",
                size: 20
                })
            ],
            indent:{
                start:650
            },
        }),
        new Paragraph(""),
        table1,
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.7.2 Web Browsing Test Results",
                size: 20
                })
            ],
            indent:{
                start:650
            },
        }),    
        new Paragraph(""),
        table2,
    ]
}


module.exports = createPage50;