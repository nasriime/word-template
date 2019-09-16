const fs = require("fs");
const { Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage13 = (doc, obj)=>{

    const image1 = Media.addImage(doc, fs.readFileSync("./images/PH.jpg"), 555, 315, {
        // floating: {
        //     horizontalPosition: {
        //         relative: HorizontalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: HorizontalPositionAlign.RIGHT
        //     },
        //     verticalPosition: {
        //         relative: VerticalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: VerticalPositionAlign.TOP,
        //     },
        //     margins: {
        //         bottom: 201440,
        //     },
        // },
    });
    
    const image2 = Media.addImage(doc, fs.readFileSync("./images/PH.jpg"), 555, 315, {
        // floating: {
        //     horizontalPosition: {
        //         relative: HorizontalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: HorizontalPositionAlign.LEFT
        //     },
        //     verticalPosition: {
        //         relative: VerticalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: VerticalPositionAlign.TOP,
        //     },
        //     margins: {
        //         bottom: 201440,
        //     },
        // },
    });

    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph({
            text: "6 Drive Test Result",
            heading	: HeadingLevel.HEADING_2,
            bold: true,
        }),
        new Paragraph(""),
        new Paragraph({
            text: "6.1 Scenario 1: Connected Mode Locked L700",
            // heading	: HeadingLevel.HEADING_2,
            bold: true,
            indent:{
                start:300
            }
        }),
        new Paragraph(""),
        new Paragraph({
            text: "Prediction of L700 Sites",
            // heading	: HeadingLevel.HEADING_2,
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
            text: "6.1.1 DL PCI Plot",
            // heading	: HeadingLevel.HEADING_2,
            bold: true,
            indent:{
                start:320
            }
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image2],
            alignment: AlignmentType.CENTER,
        })
    ]
}


module.exports = createPage13;