const fs = require("fs");
const { Paragraph, TextRun, Table, WidthType, VerticalAlign, ShadingType } = require("docx");


const createPage5=(obj)=>{

    // ************** table2 ************

    const page2Table = new Table({
        rows: 21,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });

    page2Table
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })

    page2Table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

    for(var i=0; i<21 ;i++){
        page2Table
        .getCell(i, 0)
        .Properties.setWidth("20%", WidthType.PCT);
    }
    
    for(var i=0; i<21 ;i++){
        page2Table
        .getCell(i, 1)
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
        page2Table,
    ]
}


module.exports = createPage5;