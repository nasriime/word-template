const fs = require("fs");
const { Document, Packer, Paragraph, TextRun } = require("docx");

// Create document
const doc = new Document();

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
doc.addSection({
    properties: {},
    children: [
        new Paragraph({
            children: [
                new TextRun("Hello World"),
                new TextRun({
                    text: "Foo Bar",
                    bold: true,
                }).tab(),
                new TextRun({
                    text: "Github is the best",
                    bold: true,
                }).tab(),
            ],
        }),
    ],
});

// Used to export the file into a .docx file
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Paragraph.docx", buffer);
});

// Done! A file called 'My First Document.docx' will be in your file system.
