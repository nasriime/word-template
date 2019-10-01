const fs = require("fs");
const { Document, HeadingLevel, Packer, Paragraph, TextRun, 
    BorderStyle, PageBorderDisplay } = require("docx");

    const doc = new Document();

    doc.addSection({
        properties: {
            gutter: 4,
            pageBorderBottom:{
              color: "auto",
              space: 1,
              style: BorderStyle.SINGLE,
              size: 6,
            },
            pageBorderTop:{
              color: "auto",
              space: 1,
              style: BorderStyle.SINGLE,
              size: 6,
            },
            pageBorderLeft:{
              color: "auto",
              space: 1,
              style: BorderStyle.SINGLE,
              size: 6,
            },
            pageBorderRight:{
              color: "auto",
              space: 1,
              style: BorderStyle.SINGLE,
              size: 6,
            },
            pageBorders:{
              display: PageBorderDisplay.ALL_PAGES, 
              offsetFrom : PageBorderOffsetFrom.TEXT,
            }
          },
        children: [
            new Paragraph({
                children: [
                    new TextRun("Hello World"),
                    new TextRun({
                        text: "Foo bar",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Github is the best",
                        bold: true,
                    }).tab(),
                ],
            }),
            new Paragraph({
                text: "Hello World",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph("Foo bar"),
            new Paragraph("Github is the best"),
        ],
    });
    
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });