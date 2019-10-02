const fs = require("fs");
const { Paragraph, TextRun, Table, WidthType, VerticalAlign, ShadingType, AlignmentType } = require("docx");

const createPage57 = (obj)=>{
        // ************** table 1 ************
        const table1 = new Table({
            rows: 100,
            columns: 6,
            width: 100,
            widthUnitType: WidthType.PERCENTAGE,
        });
    
        // ********row 0*********
        table1
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
        table1
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
        table1
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
        table1
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
        table1
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
        table1
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
        for(var i=1; i<100 ;i++){
            table1
            .getCell(i, 0)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }
        // ********column 1*********
        for(var i=1; i<100 ;i++){
            table1
            .getCell(i, 1)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }
        // ********column 2*********
        for(var i=1; i<100 ;i++){
            table1
            .getCell(i, 2)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }
        // ********column 3*********
        for(var i=1; i<100 ;i++){
            table1
            .getCell(i, 3)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }

        // ********column 4*********
        for(var i=1; i<100 ;i++){
            table1
            .getCell(i, 4)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }
       // ********column 5*********
       for(var i=1; i<100 ;i++){
            table1
            .getCell(i, 5)
            .add(new Paragraph({
                text: "  ",
                alignment: AlignmentType.CENTER,
            }))
            .setVerticalAlign(VerticalAlign.CENTER);
        }

        /*********** Table 2 *************/

        const table2 = new Table({
            rows: 7,
            columns: 4,
            width: 100,
            widthUnitType: WidthType.PERCENTAGE,
          });
        
          table2.getColumn(1).mergeCells(5, 6);
          table2.getColumn(2).mergeCells(1, 3);
        
          // *********column 0*******
          table2
            .getCell(0, 0)
            .add(
              new Paragraph({
                text: 'Parameter Name',
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER)
            .setShading({
              fill: '42c5f4',
              val: ShadingType.PERCENT_95,
              color: '4f81bd',
            });
          table2
            .getCell(1, 0)
            .add(
              new Paragraph({
                text: obj.table2.cell_1_0,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(2, 0)
            .add(
              new Paragraph({
                text: obj.table2.cell_2_0,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(3, 0)
            .add(
              new Paragraph({
                text: obj.table2.cell_3_0,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(4, 0)
            .add(
              new Paragraph({
                text: obj.table2.cell_4_0,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(5, 0)
            .add(
              new Paragraph({
                text: obj.table2.cell_5_0,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(6, 0)
            .add(
              new Paragraph({
                text: obj.table2.cell_6_0,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
        
          // ********column 1********
          table2
            .getCell(0, 1)
            .add(
              new Paragraph({
                text: 'Action',
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER)
            .setShading({
              fill: '42c5f4',
              val: ShadingType.PERCENT_95,
              color: '4f81bd',
            });
          table2
            .getCell(1, 1)
            .add(
              new Paragraph({
                text: obj.table2.cell_1_1,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(2, 1)
            .add(
              new Paragraph({
                text: obj.table2.cell_2_1,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(3, 1)
            .add(
              new Paragraph({
                text: obj.table2.cell_3_1,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(4, 1)
            .add(
              new Paragraph({
                text: obj.table2.cell_4_1,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(5, 1)
            .add(
              new Paragraph({
                text: obj.table2.cell_5_1,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
        
          // *********column 2*******
          table2
            .getCell(0, 2)
            .add(
              new Paragraph({
                text: 'Observation',
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER)
            .setShading({
              fill: '42c5f4',
              val: ShadingType.PERCENT_95,
              color: '4f81bd',
            });
          table2
            .getCell(1, 2)
            .add(
              new Paragraph({
                text: obj.table2.cell_1_2,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(4, 2)
            .add(
              new Paragraph({
                text: obj.table2.cell_4_2,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(5, 2)
            .add(
              new Paragraph({
                text: obj.table2.cell_5_2,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(6, 2)
            .add(
              new Paragraph({
                text: obj.table2.cell_6_2,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
        
          // *********column 3*******
          table2
            .getCell(0, 3)
            .add(
              new Paragraph({
                text: 'Date',
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER)
            .setShading({
              fill: '42c5f4',
              val: ShadingType.PERCENT_95,
              color: '4f81bd',
            });
          table2
            .getCell(1, 3)
            .add(
              new Paragraph({
                text: obj.table2.cell_1_3,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(2, 3)
            .add(
              new Paragraph({
                text: obj.table2.cell_2_3,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(3, 3)
            .add(
              new Paragraph({
                text: obj.table2.cell_3_3,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(4, 3)
            .add(
              new Paragraph({
                text: obj.table2.cell_4_3,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(5, 3)
            .add(
              new Paragraph({
                text: obj.table2.cell_5_3,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);
          table2
            .getCell(6, 3)
            .add(
              new Paragraph({
                text: obj.table2.cell_6_3,
                alignment: AlignmentType.CENTER,
              }),
            )
            .setVerticalAlign(VerticalAlign.CENTER);

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
        table1,
        new Paragraph(""),
        new Paragraph({
            children: [
              new TextRun({
                text: '9.2 Parameter Tuning',
                bold: true,
                size: 20,
              }),
            ],
            indent: {
              start: 650,
            },
          }),
          new Paragraph(''),
          table2,
    ]
}


module.exports = createPage57;