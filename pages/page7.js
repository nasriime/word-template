const fs = require("fs");
const { Paragraph, TextRun, Table, WidthType, VerticalAlign, ShadingType } = require("docx");


const crearePage7=(obj)=>{

    // ************** table 4 ************
    const table = new Table({
        rows: 20,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });

    table
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })

    table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });

    // ********column 0*********
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

    // ********column 1*********
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

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph("Round 8: (You tube + Web browsing in same round) (Measurements Only)."),
        new Paragraph("In parallel design validation should be assessed following Nokia RFP commitment and taking into consideration the below KPIs:"),
        new Paragraph("Within 4db of the best server:"),
        new Paragraph("% of area with 4 servers or more should be <2%"),
        new Paragraph("% of area with 2 servers or more should be <35%"),
        new Paragraph("Within 10db of the best server:"),
        new Paragraph("% of area with 7 servers or more should be <2%"),
        new Paragraph("Average and % of achievement for both 700Mhz and 1800Mhz under 100% load following “TE_RFP_Coverage Results_v16” design commitment sheet for (RSRP, RSRQ, SNR, DL and UL Throughput)."),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text:'4 Definitions of KPI Formula',
                bold: true
                })
            ]
        }),
        new Paragraph(""),
        table,
    ]
}


module.exports = crearePage7;