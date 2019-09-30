const fs = require("fs");
const { Header, Media, Paragraph, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom,
    AlignmentType } = require("docx");
    

const createHeader=(doc,obj)=>{
    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url),50,50, {
        floating: {
            horizontalPosition: {
                relative: HorizontalPositionRelativeFrom.INSIDE_MARGIN,
                align: HorizontalPositionAlign.RIGHT
            },
            verticalPosition: {
                relative: VerticalPositionRelativeFrom.INSIDE_MARGIN,
                align: VerticalPositionAlign.TOP,
            }
        },
    });
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url),50,50, {
        floating: {
            horizontalPosition: {
                relative: HorizontalPositionRelativeFrom.INSIDE_MARGIN,
                align: HorizontalPositionAlign.LEFT
            },
            verticalPosition: {
                relative: VerticalPositionRelativeFrom.INSIDE_MARGIN,
                align: VerticalPositionAlign.TOP,
            }
        },
    });

    return {
        default: new Header({
            children: [
                new Paragraph({
                    children: [image1, image2],
                }),
                new Paragraph(""),
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