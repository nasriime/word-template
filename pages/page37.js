const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType } = require("docx");

const createPage37 = (doc, obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url), 555, 315, {});
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url), 555, 315, {});

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.8 Downlink Long Call Results (FTP Test)",
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
                text: "6.2.8.1 DL Average Physical Throughput Plot",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),  
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "Normal Load",
                size: 20
                })
            ],
            alignment: AlignmentType.CENTER,
            indent:{
                start:3500,
                end:3500
            },
            border: {
                top: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                },
                bottom: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                },
                left: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                },
                right: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                },
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
                text: "Normal Load",
                size: 20
                })
            ],
            alignment: AlignmentType.CENTER,
            indent:{
                start:3500,
                end:3500
            },
            border: {
                top: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                },
                bottom: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                },
                left: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                },
                right: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                },
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image2],
            alignment: AlignmentType.CENTER,
        }),
    ]
}


module.exports = createPage37;