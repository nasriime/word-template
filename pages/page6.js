const fs = require("fs");
const {  Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType} = require("docx");

    // ************** table3 ************
    const page3Table = new Table({
        rows: 16,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });

    page3Table
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })

    page3Table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

    // ********column 0*********
    page3Table
    .getCell(1, 0)
    .add(new Paragraph("1,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(2, 0)
    .add(new Paragraph("2,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(3, 0)
    .add(new Paragraph("3,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(4, 0)
    .add(new Paragraph("4,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(5, 0)
    .add(new Paragraph("5,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(6, 0)
    .add(new Paragraph("6,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(7, 0)
    .add(new Paragraph("7,0"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(8, 0)
    .add(new Paragraph("8,0"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1*********
    page3Table
    .getCell(1, 1)
    .add(new Paragraph("1,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(2, 1)
    .add(new Paragraph("2,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(3, 1)
    .add(new Paragraph("3,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(4, 1)
    .add(new Paragraph("4,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(5, 1)
    .add(new Paragraph("5,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(6, 1)
    .add(new Paragraph("6,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(7, 1)
    .add(new Paragraph("7,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page3Table
    .getCell(8, 1)
    .add(new Paragraph("8,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

const crearePage1=(obj)=>{
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text:'2.2 OSS KPIs (Cluster Level)',
                bold: true
                })
            ]
        }),
        new Paragraph(""),
        page3Table,
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text:'Drive Test Criteria',
                bold: true
                })
            ]
        }),
        new Paragraph("Detailed routes are considered  shared for validation before DT start."),
        new Paragraph("OSS RFP KPIs commitment to be communicated"),
        new Paragraph("Below rounds to be considered in DT and targets following DT RFP commitment."),
        new Paragraph("a) L700 locked connected:"),
        new Paragraph("Round 1: UE DL + UE CSFB MO."),
        new Paragraph("Round 2: UE DL 100% load."),
        new Paragraph("Round 3: UE UL."),
        new Paragraph("b) L1800 locked connected:"),
        new Paragraph("Round 4: UE DL + UE CSFB MT."),
        new Paragraph("Round 5: UE DL 100% load."),
        new Paragraph("Round 6: UE UL."),
        new Paragraph("c) Free Connected:"),
        new Paragraph("Round 7: UE DL + IDLE."),
    ]
}
    
module.exports = crearePage1;