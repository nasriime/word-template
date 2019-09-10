const fs = require("fs");
const {  Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom,
    AlignmentType} = require("docx");

const doc = new Document(undefined, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
});

const image1 = Media.addImage(doc, fs.readFileSync("./bg2.jpg"),50,50, {
    floating: {
        horizontalPosition: {
            relative: HorizontalPositionRelativeFrom.OUTSIDE_MARGIN,
            align: HorizontalPositionAlign.RIGHT
        },
        verticalPosition: {
            relative: VerticalPositionRelativeFrom.OUTSIDE_MARGIN,
            align: VerticalPositionAlign.TOP,
        },
        margins: {
            bottom: 201440,
        },
    },
});

const image2 = Media.addImage(doc, fs.readFileSync("./bg2.jpg"),50,50, {
    floating: {
        horizontalPosition: {
            relative: HorizontalPositionRelativeFrom.OUTSIDE_MARGIN,
            align: HorizontalPositionAlign.LEFT
        },
        verticalPosition: {
            relative: VerticalPositionRelativeFrom.OUTSIDE_MARGIN,
            align: VerticalPositionAlign.TOP,
        },
        margins: {
            bottom: 201440,
        },
    },
});


doc.addSection({
    headers: {
        default: new Header({
            children: [
                new Paragraph({
                    children: [image1, image2],
                }),
                new Paragraph(""),
                new Paragraph(""),
                new Paragraph({
                    children:[
                        new TextRun({
                            text: "Github is the best",
                        })
                    ],
                    // text: "Short hand notation for adding text.",
                    alignment: AlignmentType.CENTER,
                    thematicBreak: true,
                }),
            ],
        }),
    },
    footers: {
        default: new Footer({
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Lorem Ipsum Foo Bar                                  "), 
                        new TextRun("Hello World                                          "), 
                        new TextRun("Hello World")
                    ],
                    border: {
                        top: {
                            color: "auto",
                            space: 1,
                            value: "single",
                            size: 6,
                        }
                    },
                })            
            ],
        }),
    },
    children: [
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph(""),
        new Paragraph("Hello World"),
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});