const fs = require("fs");
const { Paragraph, TextRun, Table, WidthType, VerticalAlign, ShadingType } = require("docx");


const crearePage7=(obj)=>{

    const acceptanceKpi = [
        "",
        "DL MCS Distribution",
        "UL MCS Distribution",
        "CQI Distribution",
        "RACH Completion Success Rate",
        "Average RSSI",
        "RRC Connection Setup Success Rate",
        "CSFB Setup Success Rate",
        "ERAB Drop Rate",
        "LTE Intra-frequency HO Success Rate",
        "LTE Inter-frequency HO Success Rate",
        "Peak DL Application Throughput @10MHz",
        "Peak UL Application Throughput @10MHz",
        "Peak DL Application Throughput @5MHz",
        "Peak UL Application Throughput @5MHz",
        "Downlink BLER",
        "Uplink BLER",
        "ENB Availability"
    ];

    const nokiaApi = [
        "",
        "LTE_1074a Avg MCS PDSCH trans",
        "LTE_1075a Avg MCS PUSCH trans",
        "LTE_5427a Average CQI",
        "LTE_5569a RACH Stp Completion SR",
        "LTE_5444b Avg RSSI for PUSCH",
        "LTE_5218f Total E-UTRAN RRC conn stp SR",
        "100*[sum(UE_CTX_SETUP_SUCC_CSFB) + sum(UE_CTX_MOD_SUCC_CSFB)] / [sum(UE_CTX_SETUP_ATT_CSFB) + sum(UE_CTX_MOD_ATT_CSFB)]",
        "LTE_5025e E-RAB DR RAN",
        "LTE_5568a E-UTRAN Intra-Frequency HO Success Ratio",
        "LTE_5114a E-UTRAN Inter-Freq HO SR",
        "LTE_291b Max PDCP Thr DL",
        "LTE_288b Max PDCP Thr UL",
        "LTE_291b Max PDCP Thr DL",
        "LTE_288b Max PDCP Thr UL",
        "LTE_139d Perc DL_SCH TB RTRANS",
        "LTE_140b Perc UL_SCH TB RTRANS",
        "LTE_5750a Cell Avail",
    ];

     // ************** table ************
     const table = new Table({
        rows: 17,
        columns: 2,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

    table
    .getCell(0, 0)
    .add(new Paragraph({
        text: "OSS Acceptance KPI",
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
        text: "Nokia KPI",
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    });

    for(var i=1; i<17 ;i++){
        table
        .getCell(i, 0)
        .add(new Paragraph({
            text: acceptanceKpi[i],
        }))
        .Properties.setWidth("30%", WidthType.PCT);
    }
    
    for(var i=1; i<17 ;i++){
        table
        .getCell(i, 1)
        .add(new Paragraph({
            text: nokiaApi[i],
        }))
        .Properties.setWidth("70%", WidthType.PCT);
    }

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "- In parallel design validation should be assessed following Nokia RFP commitment and taking into consideration the below KPIs:",
                size: 20
                })
            ],
        }),
        new Paragraph({
            children: [new TextRun({
                text: "Within 4db of the best server:",
                size: 20
                })
            ],
            bullet:{ 
                level: 0
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "% of area with 4 servers or more should be <2%",
                size: 20
                })
            ],
            bullet:{ 
                level: 1
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "% of area with 2 servers or more should be <35%",
                size: 20
                })
            ],
            bullet:{ 
                level: 1
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "Within 10db of the best server:",
                size: 20
                })
            ],
            bullet:{ 
                level: 0
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "% of area with 7 servers or more should be <2%",
                size: 20
                })
            ],
            bullet:{ 
                level: 1
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text:'Average and % of achievement for both 700Mhz and 1800Mhz under 100% load following “TE_RFP_Coverage Results_v16” design commitment sheet for (RSRP, RSRQ, SNR, DL and UL Throughput).',
                size: 20
                })
            ],
            bullet:{ 
                level: 0
            },
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text:'4 Definitions of KPI Formula',
                size: 23,
                bold: true
                })
            ]
        }),
        new Paragraph(""),
        table,
    ]
}


module.exports = crearePage7;