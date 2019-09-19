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
                text: "1 SCOPE..............................................................5",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "2 ACCEPTANCE KPIS....................................................5",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "2.1 Drive Test KPIs (Cluster Level)..................................5",
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
                text: "2.2 OSS KPIs (Cluster Level)..................................6",
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
                text: "3 Drive Test Criteria................................................6",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "4 Definitions of KPI Formula.........................................7",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "5 Drive Test Definition..............................................8",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "5.1 Drive Test device................................................8",
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
                text: "5.2 Cluster Site Lis................................................8",
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
                text: "5.3 Cluster Polygon figure + DT Route Figure............................8",
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
                text: "6 DRIVE TEST RESULT................................................6",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
        new Paragraph("2 Acceptance KPIs....................................................5"),
        new Paragraph(""),
        new Paragraph("2 Acceptance KPIs....................................................5"),
        new Paragraph(""),
        new Paragraph("2 Acceptance KPIs....................................................5"),
        new Paragraph(""),
        new Paragraph("2 Acceptance KPIs....................................................5"),
        new Paragraph(""),
        new Paragraph("2 Acceptance KPIs....................................................5"),
        new Paragraph(""),
        new Paragraph("2 Acceptance KPIs....................................................5"),
        new Paragraph(""),
        new Paragraph("2 Acceptance KPIs....................................................5"),
    ]
}


module.exports = createPage2;