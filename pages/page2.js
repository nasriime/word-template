const fs = require("fs");
const { Paragraph, TextRun } = require("docx");

const createPage2=(obj)=>{
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [
                new TextRun({
                    text:"Table of Contents",
                    size: 26
                }),
            ]}),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "1 SCOPE......................................................................5",
                bold: true,
                size: 20,
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "2 ACCEPTANCE KPIS.....................................................5",
                bold: true,
                size: 20,
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "2.1 Drive Test KPIs (Cluster Level)..........................................5",
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
                text: "2.2 OSS KPIs (Cluster Level).................................................6",
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
                text: "3 Drive Test Criteria........................................................6",
                bold: true,
                size: 20,
                allCaps: true
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "4 Definitions of KPI Formula................................................7",
                bold: true,
                size: 20,
                allCaps: true
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "5 Drive Test Definition.....................................................8",
                bold: true,
                size: 20,
                allCaps: true
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "5.1 Drive Test device......................................................8",
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
                text: "5.2 Cluster Site Lis.......................................................8",
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
                text: "5.3 Cluster Polygon figure + DT Route Figure...............................8",
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
                text: "6	Drive Test Result....................................................6",
                bold: true,
                size: 20,
                allCaps: true
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.1 Scenario 1: Connected Mode Locked L700................................13",
                bold: true,
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
                text: "6.1.1	DL PCI Plot......................................................13",
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
                text: "6.1.2	RAT Technology Plot..............................................14",
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
                text: "6.1.3	DL EARFCN..........................................................14",
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
                text: "6.1.4	DL RSRP Statistics.................................................15",
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
                text: "6.1.5	DL SINR Statistics.................................................18",
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
                text: "6.1.6	RFP Commitment.....................................................20",
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
                text: "6.1.7	Intra Frequency Handover Success Rate Analysis.....................20",
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
                text: "6.1.8	Downlink Long Call Results (FTP Test)..............................21",
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
                text: "6.1.9	Uplink Long Call Results (FTP Test).............................................24",
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
                text: "6.1.10	Short Call Test.............................................27",
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
                text: "6.1.11	Overlapped...................................................28",
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
                text: "6.2 Scenario 2: Connected Mode Locked L1800........................................29",
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
                text: "6.2.1	DL PCI Plot.............................................29",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }) 
    ]
}


module.exports = createPage2;