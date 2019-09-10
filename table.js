const fs = require("fs");
const { Document, Packer, Paragraph, Table } = require("docx");

const doc = new Document();

const table = new Table({
    rows: 4,
    columns: 4,
});

table.getCell(2, 2).add(new Paragraph("Hello"));

doc.addSection({
    children: [table],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My table.docx", buffer);
});