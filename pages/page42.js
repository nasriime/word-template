const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType, Table, 
    WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage42 = (doc, obj)=>{

    const image = Media.addImage(doc, fs.readFileSync(obj.imageUrl), 555, 315, {});
   
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.9.4 Plot of FTP file UL Radio Access Technology",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image],
            alignment: AlignmentType.CENTER,
        })     
    ]
}


module.exports = createPage42;