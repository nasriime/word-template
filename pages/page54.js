const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType } = require("docx");

const createPage54 = (doc, obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url), 555, 315, {});

    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url), 555, 315, {});

    const image3 = Media.addImage(doc, fs.readFileSync(obj.image3Url), 555, 315, {});

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
                text: "7.10 Plot of Average Downlink PDCP User Throughput @ 10 MHz",
                bold: true,
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
                text: "7.11 Plot of Average Uplink PDCP User Throughput @ 10 MHz",
                bold: true,
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
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "7.12 Plot of Average Downlink PDCP User Throughput @ 5 MHz",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image3],
            alignment: AlignmentType.CENTER,
        })
    ]
}


module.exports = createPage54;