const fs = require("fs");
const { Media, Paragraph, AlignmentType} = require("docx");

const createPage29 = (doc, obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url), 555, 315, {});
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url), 555, 315, {});

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph({
            text: "6.2 Scenario 2: Connected Mode Locked L1800",
            bold: true,
            indent:{
                start:300
            }
        }),
        new Paragraph(""),
        new Paragraph({
            text: "Prediction of L800 Sites",
            bold: true,
            bullet:{ 
                level: 0 
            }
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image1],
            alignment: AlignmentType.CENTER,
        }),
        new Paragraph(""),
        new Paragraph({
            text: "6.2.1 DL PCI Plot",
            bold: true,
            indent:{
                start:650
            }
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image2],
            alignment: AlignmentType.CENTER,
        })
    ]
}


module.exports = createPage29;