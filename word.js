const fs = require("fs");
const { Document, Packer, Paragraph, Table, Header, 
    Footer, Media, TextWrappingSide, TextWrappingType, 
    VerticalAlign, WidthType } = require("docx");

// Create document
const doc = new Document();

const table = new Table({
    rows: 4,
    columns: 4,
    width: 100,
    widthUnitType: WidthType.PERCENTAGE,
});
table
    .getCell(1, 1)
    .add(new Paragraph("This text should be in the middle of the cell"))
    .setVerticalAlign(VerticalAlign.CENTER);

table.getCell(2, 2).add(new Paragraph("Hello"));

const image = Media.addImage(doc, fs.readFileSync("./bg2.jpg"), 200, 200, {
    floating: {
        horizontalPosition: {
            align: 'CENTER',
            offset: 2014400,
        },
        verticalPosition: {
            offset: 2014400,
        },
        wrap: {
            type: TextWrappingType.SQUARE,
            side: TextWrappingSide.BOTH_SIDES,
        },
        margins: {
            top: 401440,
            bottom: 201440,
        },
    },
});

doc.addSection({
    headers: {
        default: new Header({
            children: [new Paragraph("Header text")],
        }),
    },
    footers: {
        default: new Footer({
            children: [new Paragraph("Footer text")],
        }),
    },
    children: [
                new Paragraph("Hello World"),
                new Paragraph(image),
                table,
            ],
});


// Used to export the file into a .docx file
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});

// Done! A file called 'My First Document.docx' will be in your file system.
