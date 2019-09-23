const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType, Table, 
    WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage41 = (doc, obj)=>{

    const image = Media.addImage(doc, fs.readFileSync(obj.imageUrl), 555, 315, {});
    
    // ************** table ************

    const table = new Table({
        rows: 8,
        columns: 3,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });


     // *********column 0*******
     table
     .getCell(0, 0)
     .add(new Paragraph({
         text: "Legend",
         alignment: AlignmentType.CENTER,
     }))
     .setVerticalAlign(VerticalAlign.CENTER)
     .setShading({
         fill: "42c5f4",
         val: ShadingType.PERCENT_95,
         color: "4f81bd",
     })
     table
     .getCell(1, 0)
     .add(new Paragraph({
         text: "(Min, 100)",
         alignment: AlignmentType.CENTER,
     }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table
     .getCell(2, 0)
     .add(new Paragraph({
         text: "(100, 500)",
         alignment: AlignmentType.CENTER,
     }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table
     .getCell(3, 0)
     .add(new Paragraph({
         text: "(500, 1000)",
         alignment: AlignmentType.CENTER,
     }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table
     .getCell(4, 0)
     .add(new Paragraph({
         text: "(1000, 3000)",
         alignment: AlignmentType.CENTER,
     }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table
     .getCell(5, 0)
     .add(new Paragraph({
         text: "(3000, 5000)",
         alignment: AlignmentType.CENTER,
     }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table
     .getCell(6, 0)
     .add(new Paragraph({
         text: "(5000, 10000)",
         alignment: AlignmentType.CENTER,
     }))
     .setVerticalAlign(VerticalAlign.CENTER);
     table
     .getCell(7, 0)
     .add(new Paragraph({
         text: "(10000, Max)",
         alignment: AlignmentType.CENTER,
     }))
     .setVerticalAlign(VerticalAlign.CENTER);
 
 
     // ********column 1********
     table
     .getCell(0, 1)
     .add(new Paragraph({
         text: "Number of samples",
         alignment: AlignmentType.CENTER,
     }))    
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
     table
     .getCell(6, 1)
     .add(new Paragraph({
         text: obj.cell_6_1,
         alignment: AlignmentType.CENTER,
     })) 
     .setVerticalAlign(VerticalAlign.CENTER);
     table
     .getCell(7, 1)
     .add(new Paragraph({
         text: obj.cell_7_1,
         alignment: AlignmentType.CENTER,
     })) 
     .setVerticalAlign(VerticalAlign.CENTER);
 
     // *******column 2*******
     table
     .getCell(0, 2)
     .add(new Paragraph({
         text: "Percentage of samples",
         alignment: AlignmentType.CENTER,
     }))    
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
     .getCell(2, 2)
     .add(new Paragraph({
         text: obj.cell_2_2,
         alignment: AlignmentType.CENTER,
     })) 
     .setVerticalAlign(VerticalAlign.CENTER);
     table
     .getCell(3, 2)
     .add(new Paragraph({
         text: obj.cell_3_2,
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
     table
     .getCell(7, 2)
     .add(new Paragraph({
         text: obj.cell_7_2,
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
                text: "6.2.9.2 PDF of legends",
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
                text: "6.2.9.3 Table of legend vs. # of samples in each legend vs. percentage of samples of each legend",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        table,      
    ]
}


module.exports = createPage41;