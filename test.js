const fs = require("fs");
const {  
    Document,
    Packer,
    Paragraph,
    RelativeHorizontalPosition,
    RelativeVerticalPosition,
    Table,
    TableAnchorType,
    TableCell,
    TableLayoutType,
    AlignmentType,
    BorderStyle,
    TableRow,
    WidthType } = require("docx");

const doc = new Document();

const table = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Table({
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph("hello")],
                                        }),
                                    ],
                                }),
                            ],
                            width: {
                                size: 4535,
                                type: WidthType.DXA,
                            }

                        })
                    ],
                    // columnSpan: 2,
                    margins:{
                        left: 2000
                    },
                    borders: {
                        top: {
                            style: BorderStyle.DASH_DOT_STROKED,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.THICK_THIN_MEDIUM_GAP,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.DASH_DOT_STROKED,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.THICK_THIN_MEDIUM_GAP,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),
            ],
        }),
        // new TableRow({
        //     children: [
        //         new TableCell({
        //             children: [],
        //         }),
        //         new TableCell({
        //             children: [],
        //         }),
        //     ],
        // }),
    ],
    // float: {
    //     horizontalAnchor: TableAnchorType.MARGIN,
    //     verticalAnchor: TableAnchorType.MARGIN,
    //     relativeHorizontalPosition: RelativeHorizontalPosition.CENTER,
    //     relativeVerticalPosition: RelativeVerticalPosition.TOP,
    // },
    width: {
        size: 100,
        type: WidthType.PERCENTAGE,
    },
    // layout: TableLayoutType.FIXED,
});

doc.addSection({
    children: [table],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});