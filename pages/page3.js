const fs = require("fs");
const { Paragraph, TextRun } = require("docx");


const crearePage3=(obj)=>{
    return [
        new Paragraph({
            children: [new TextRun({
                text: "6.2.2	RAT Technology Plot...............................................30",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.3	DL EARFCN...........................................................30",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.4	DL RSRP Statistics..................................................31",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.5	DL SINR Statistics....................................................34",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.6	RFP Commitment........................................................36",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.7	Intra Frequency Handover Success Rate Analysis.........................36",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.8	Downlink Long Call Results (FTP Test)................................37",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.9	Uplink Long Call Results (FTP Test)................................40",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.10	Short Call Test.....................................................43",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.11	Overlapped.....................................................43",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3	Scenario 3: Connected Mode Free Camping.................................45",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.1	DL PCI Plot..........................................................45",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.2	RAT Technology Plot.....................................................45",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.3	DL EARFCN................................................................46",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.4	DL RSRP Statistics..........................................................46",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.5	DL SINR Statistics..........................................................48",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.3.7	YouTube Video Streaming Results.............................................50",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7            OSS KPIS ON CLUSTER LEVEL RESULTS...............................51",
                size: 20,
                bold:true,
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.1	Plot of DL MCS Allocated Average................................................51",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.2	Plot of UL MCS Allocated Average................................................51",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.3	Plot of CQI Distribution........................................................51",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.4	Plot of RACH Success Rate......................................................52",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.5	Plot of RRC Connection Setup Success Rate.......................................52",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.6	Plot of CSFB Setup Success Rate.................................................52",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.7	Plot of ERAB Drop Rate..........................................................53",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.8	Plot of LTE Intra-frequency HO Success Rate......................................53",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.9	Plot of LTE Inter-frequency HO Success Rate.......................................53",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.10	Plot of Average Downlink PDCP User Throughput @ 10 MHz............................54",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.11	Plot of Average Uplink PDCP User Throughput @ 10 MHz...............................54",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.12	Plot of Average Downlink PDCP User Throughput @ 5 MHz...............................54",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.13	Plot of Average Uplink PDCP User Throughput @ 5 MHz...............................55",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
    ]
}


module.exports = crearePage3;