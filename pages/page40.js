const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType, Table, 
    WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage40 = (doc, obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url), 555, 315, {});
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url), 555, 315, {});

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.8.5 Plots of FTP File DL Average Throughput vs. Average CQI",
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
                text: "6.2.9 Uplink Long Call Results (FTP Test)",
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
                text: "6.2.9.1 UL Average Physical Throughput Plot",
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


module.exports = createPage40;