const fs = require("fs");
const { Paragraph, Table, WidthType, TextRun, VerticalAlign, ShadingType, AlignmentType } = require("docx");

const createPage9=(obj)=>{

    // ************** table ************

    const table = new Table({
        rows: 30,
        columns: 11,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

    // *********row 0*******

    table
    .getCell(0, 0)
    .add(new Paragraph({
        text: "Site",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })

    table
    .getCell(0, 1)
    .add(new Paragraph({
        text: "Call ID",
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
        text: "Band",
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
        text: "Longitude",
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
        text: "Latitude",
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
        text: "Height(m)",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 6)
    .add(new Paragraph({
        text: "Azimuth",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 7)
    .add(new Paragraph({
        text: "PCI",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 8)
    .add(new Paragraph({
        text: "E-Tilt",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 9)
    .add(new Paragraph({
        text: "Power",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });
    table
    .getCell(0, 10)
    .add(new Paragraph({
        text: "RS Boost",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });

    // *********column 0*******
    for(var i=1; i<30 ;i++){
        table
        .getCell(i, 0)
        .add(new Paragraph({
            text: i+",0",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
    // ********column 1********
    for(var i=1; i<30 ;i++){
        table
        .getCell(i, 1)
        .add(new Paragraph({
            text: i+",1",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
    // *******column 2*******
    for(var i=1; i<30 ;i++){
        table
        .getCell(i, 2)
        .add(new Paragraph({
            text: i+",2",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
    // *******column 3*********
    for(var i=1; i<30 ;i++){
        table
        .getCell(i, 3)
        .add(new Paragraph({
            text: i+",3",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
    // ********column 4*********
    for(var i=1; i<30 ;i++){
        table
        .getCell(i, 4)
        .add(new Paragraph({
            text: i+",4",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
    // ********column 5*********
    for(var i=1; i<30 ;i++){
        table
        .getCell(i, 5)
        .add(new Paragraph({
            text: i+",5",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
    // ********column 6*********
    for(var i=1; i<30 ;i++){
        table
        .getCell(i, 6)
        .add(new Paragraph({
            text: i+",6",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
      // ********column 7*********
      for(var i=1; i<30 ;i++){
        table
        .getCell(i, 7)
        .add(new Paragraph({
            text: i+",7",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
      // ********column 8*********
      for(var i=1; i<30 ;i++){
        table
        .getCell(i, 8)
        .add(new Paragraph({
            text: i+",8",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
      // ********column 9*********
      for(var i=1; i<30 ;i++){
        table
        .getCell(i, 9)
        .add(new Paragraph({
            text: i+",9",
            alignment: AlignmentType.CENTER,
        }))
        .setVerticalAlign(VerticalAlign.CENTER);
    }
      // ********column 10*********
      for(var i=1; i<30 ;i++){
        table
        .getCell(i, 10)
        .add(new Paragraph({
            text: i+",10",
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
        new Paragraph({
            children: [new TextRun({
                text: "5.2  Cluster Site List",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:300
            },
        }),
        new Paragraph(""),
        table
    ]
}


module.exports = createPage9;