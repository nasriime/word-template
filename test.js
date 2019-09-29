const fs = require("fs");
const { Document, HeadingLevel, Packer, Paragraph, Table, TableCell, TableRow, VerticalAlign} = require("docx");


    const doc = new Document();

    const table = new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({}), new Paragraph({})],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [new Paragraph({}), new Paragraph({})],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                text:
                                    "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah",
                                heading: HeadingLevel.HEADING_1,
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                text: "This text should be in the middle of the cell",
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
        ],
    });
    
    doc.addSection({
        children: [table],
    });
    
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });