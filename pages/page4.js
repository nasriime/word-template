const fs = require("fs");
const { Paragraph, TextRun } = require("docx");
    

const createPage4=(obj)=>{
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "7.14	Plot of Downlink BLER...............................................55",
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
                text: "7.15	Plot of Uplink BLER...................................................55",
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
                text: "7.16	Plot of ENB Availbility..................................................56",
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
                text: "8	Plot of Traffic..........................................................56",
                size: 20,
                bold: true,
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
                text: "9	Optimization Actions Taken................................................57",
                size: 20,
                bold: true,
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
                text: "9.1	Physical and Power Actions................................................57",
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
                text: "9.2	Paramater Tuning..........................................................59",
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
                text: "10	Performance Summary.......................................................60",
                size: 20,
                bold: true,
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
                text: "10.1	Drive Test KPIs (Cluster Level).............................................60",
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
                text: "10.2	OSS KPIs (Cluster Level)......................................................60",
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
                text: "10.2.1	OSS KPIs (Band 700)......................................................61",
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
                text: "10.2.2	OSS KPIs (Band 1800)......................................................61",
                size: 18
                })
            ],
            indent:{
                start:500
            },
        }),
        new Paragraph(""),
    ]
}


module.exports = createPage4;