const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType } = require("docx");

const createPage31 = (doc, obj)=>{

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
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "6.2.4 DL RSRP Statistics",
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
                text: "6.2.4.1 RSRP Plot",
                size: 20
                })
            ],
            indent:{
                start:1000
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "Normal Load",
                size: 20
                })
            ],
            alignment: AlignmentType.CENTER,
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
                text: "Full Load",
                size: 20,
                })
            ],
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
            alignment: AlignmentType.CENTER,
        }),
        new Paragraph(""),
        new Paragraph({
            children: [image2],
            alignment: AlignmentType.CENTER,
        })
    ]
}


module.exports = createPage31;