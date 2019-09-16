const fs = require("fs");
const { Paragraph, TextRun, Table, WidthType, VerticalAlign, AlignmentType,
    ShadingType, TableAnchorType,  RelativeHorizontalPosition, RelativeVerticalPosition } = require("docx");


const createPage5=(obj)=>{

    // ************** table2 ************

    const table = new Table({
        rows: 21,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
        // columnWidths: [1000, 1000],
        // float: {
        //     horizontalAnchor: TableAnchorType.MARGIN,
        //     verticalAnchor: TableAnchorType.MARGIN,
        //     relativeHorizontalPosition: RelativeHorizontalPosition.CENTER,
        //     relativeVerticalPosition: RelativeVerticalPosition.BOTTOM,
        // },
        // margins: {
        //     top: 100,
        //     bottom: 100,
        //     right: 100,
        //     left: 100,
        // },
    });

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
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

    for(var i=0; i<21 ;i++){
        table
        .getCell(i, 0)
        .add(new Paragraph(i+",1"))
        .Properties.setWidth("20%", WidthType.PCT);
    }
    
    for(var i=0; i<21 ;i++){
        table
        .getCell(i, 1)
        .add(new Paragraph("0,"+i))
        .Properties.setWidth("80%", WidthType.PCT);
    }


    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text:'1  Scope',
                bold: true
                })
            ]
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph("The purpose of this document is to present the Cluster Acceptance standard and Result of TE LTE project. "),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text:'2 Acceptance KPI',
                bold: true
                })
            ]
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph("Ninety percent (90%) of sites of the desired cluster should be on air before starting the cluster test. Only agreed special cases of some sites will be considered as standalone sites (SSV) and will be excluded from the cluster acceptance. "),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text:'2.1 Drive Test KPIs (Cluster Level)',
                bold: true,
                indent: 720
                })
            ]
        }),
        new Paragraph(""),
        new Paragraph(""),
        // new Paragraph({
        //     children: [table],
        //     alignment: AlignmentType.CENTER,
        // }),
        table,
    ]
}


module.exports = createPage5;