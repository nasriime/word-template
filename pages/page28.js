const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType } = require("docx");

const createPage28 = (doc, obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url), 555, 315, {});
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url), 555, 315, {});

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.1.11 Overlapped",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:650
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.1.11.1 Overlap Plot",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image1],
            alignment: AlignmentType.CENTER,
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.1.11.2 PDF of legends",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image2],
            alignment: AlignmentType.CENTER,
        })
    ]
}


module.exports = createPage28;