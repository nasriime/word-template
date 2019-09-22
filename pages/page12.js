const fs = require("fs");
const { Media, Paragraph, AlignmentType, TextRun } = require("docx");

const createPage12=(doc, obj)=>{

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
                text: "5.3 Cluster Polygon figure + DT Route figure",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:350
            },
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [image1],
            alignment: AlignmentType.CENTER,
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            children: [image2],
            alignment: AlignmentType.CENTER,
        }),
    ]
}


module.exports = createPage12;