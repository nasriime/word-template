const fs = require("fs");
const { Paragraph, TextRun, Table, WidthType, VerticalAlign, ShadingType, AlignmentType } = require("docx");

   
const createPage6=(obj)=>{

    const KPIs = [
        "",
        "DL MCS Distribution",
        "UL MCS Distribution",
        "CQI Distribution",
        "RACH Completion Success Rate",
        "RRC Connection Setup Success Rate",
        "CSFB Setup Success Rate",
        "ERAB Drop Rate",
        "LTE Intra-frequency HO Success Rate",
        "LTE Inter-frequency HO Success Rate",
        "Average DL PDCP User Throughput @ 10 MHz",
        "Average UL PDCP User Throughput @ 10 MHz",
        "Average DL PDCP User Throughput @ 5 MHz",
        "Average UL PDCP User Throughput @ 5 MHz",
        "Downlink BLER",
        "Uplink BLER",
        "ENB Availability"
    ];

     // ************** table ************
     const table = new Table({
        rows: 17,
        columns: 2,
        width: 5535,
        widthUnitType: WidthType.DXA,
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

    for(var i=1; i<17 ;i++){
        table
        .getCell(i, 0)
        .add(new Paragraph({
            text: ""+i+"",
            alignment: AlignmentType.CENTER,
        }))
        .Properties.setWidth("20%", WidthType.PCT);
    }
    
    for(var i=1; i<17 ;i++){
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
                text:'2.2 OSS KPIs (Cluster Level)',
                bold: true
                })
            ]
        }),
        new Paragraph(""),
        table,
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text:'Drive Test Criteria',
                bold: true
                })
            ]
        }),
        new Paragraph("- Detailed routes are considered shared for validation before DT start."),
        new Paragraph("- OSS RFP KPIs commitment to be communicated"),
        new Paragraph("- Below rounds to be considered in DT and targets following DT RFP commitment."),
        new Paragraph({
            children: [new TextRun({
                text: "a) L700 locked connected:",
                size: 20
                })
            ],
            indent:{
                start:550
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "i. Round 1: UE DL + UE CSFB MO.",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "ii. Round 2: UE DL 100% load.",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "iii. Round 3: UE UL.",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "b) L1800 locked connected:",
                size: 20
                })
            ],
            indent:{
                start:550
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "i. Round 4: UE DL + UE CSFB MT.",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "ii. Round 5: UE DL 100% load.",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "iii. Round 6: UE UL.",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "c) Free Connected:",
                size: 20
                })
            ],
            indent:{
                start:550
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "i. Round 7: UE DL + IDLE.",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph({
            children: [new TextRun({
                text: "ii. Round 8: (You tube + Web browsing in same round) (Measurements Only).",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
    ]
}
    
module.exports = createPage6;