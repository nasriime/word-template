const fs = require("fs");
const { Media, Paragraph, AlignmentType, TextRun } = require("docx");

const createPage13 = (doc, obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url), 555, 315, {});
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url), 555, 315, {});

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6 Drive Test Result",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:350
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.1 Scenario 1: Connected Mode Locked L700",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:550
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "Prediction of L700 Sites",
                bold: true,
                size: 17
                })
            ],
            bullet:{ 
                level: 1
            },
            indent:{
                start:1000
            }
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image1],
            alignment: AlignmentType.CENTER,
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.1.1 DL PCI Plot",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:550
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image2],
            alignment: AlignmentType.CENTER,
        })
    ]
}


module.exports = createPage13;