const fs = require("fs");
const { Document, Packer, Paragraph, Table, TextRun } = require("docx");

const obj={
    page1:{
        image1Url: './bg2.jpg',
        image2Url: './bg2.jpg',
        headerText: 'LTC Header',
        footerText: 'LTC Footer',
        bodyText: 'LTC Body'
    },
    page2:{

    }
}

const create = (obj)=>{
    const document = new Document();
/**
 ***************************** @page1 ******************************
 * 
 */
    const image1 = Media.addImage(doc, fs.readFileSync(obj.page1.image1Url),50,50, {
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
    
    const image2 = Media.addImage(doc, fs.readFileSync(obj.page1.image2Url),50,50, {
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
    

    const image1 = Media.addImage(doc, fs.readFileSync(obj.image1Url)); //var
    const image2 = Media.addImage(doc, fs.readFileSync(obj.image2Url)); //var

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
                        text: obj.page1.headerText, // var
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
                            new TextRun("Lorem Ipsum Foo Bar                                  "),  //var
                            new TextRun("Hello World                                          "),  //var
                            new TextRun("Hello World") //var
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
            new Paragraph(obj.page1.bodyText), //var
        ],
    });
}