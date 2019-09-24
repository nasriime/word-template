const fs = require("fs");
const { Paragraph, TextRun, Table, WidthType, VerticalAlign, AlignmentType,
    ShadingType, TableAnchorType,  RelativeHorizontalPosition, RelativeVerticalPosition } = require("docx");


const createPage5=(obj)=>{

    const KPIs = [
        "",
        "Serving RSRP",
        "Serving RSRQ",
        "Serving RS SINR",
        "Serving Channel RSSI",
        "CQI",
        "Attach Success Rate",
        "Paging Success Rate",
        "RRC Connection Setup Success Rate",
        "ERAB Setup Success Rate",
        "CSFB Setup Success Rate",
        "RRC Connection Drop Rate",
        "Bearer Connection Drop Rate",
        "LTE Intra-frequency HO Success Rate",
        "LTE Inter-frequency HO Success Rate",
        "CSFB Success Rate via Redirect",
        "Average Downlink Application User Throughput @ 10 MHz",
        "Average Uplink Application User Throughput @ 10 MHz",
        "Average Downlink Application User Throughput @ 5 MHz",
        "Average Uplink Application User Throughput @ 5 MHz",
    ];

    // ************** table ************

    const table = new Table({
        rows: 20,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
        // columnWidths: [1000, 1000],
        // float: {
        //     horizontalAnchor: TableAnchorType.PAGE,
        //     verticalAnchor: TableAnchorType.PAGE,
        //     relativeHorizontalPosition: RelativeHorizontalPosition.CENTER,
        //     relativeVerticalPosition: RelativeVerticalPosition.CENTER,
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
    .add(new Paragraph({
        text: "S/N",
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
        text: "OSS KPI ( Cluster Level)",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });

    for(var i=1; i<20 ;i++){
        table
        .getCell(i, 0)
        .add(new Paragraph({
            text: ""+i+"",
            alignment: AlignmentType.CENTER,
        }))
        .Properties.setWidth("20%", WidthType.PCT);
    }
    
    for(var i=1; i<20 ;i++){
        table
        .getCell(i, 1)
        .add(new Paragraph({
            text: KPIs[i],
            alignment: AlignmentType.CENTER,
        }))
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
        table,
    ]
}


module.exports = createPage5;