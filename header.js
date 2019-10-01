const fs = require("fs");
const { Header, Media, Paragraph, TextRun, AlignmentType } = require("docx");
    

const createHeader=(doc,obj)=>{
    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url),100,30, {});
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url),50,50, {});

    return {
        default: new Header({
            children: [
                new Paragraph({
                    children: [
                        image1, 
                        new TextRun("                                                                                                                           "),
                        image2
                    ],
                    alignment: AlignmentType.CENTER,

                }),
                new Paragraph(""),
                new Paragraph({
                    text: "LTE Cluster Acceptance Report",
                    alignment: AlignmentType.CENTER,
                    thematicBreak: true,
                }),
            ],
        }),
    }
}


module.exports = createHeader;