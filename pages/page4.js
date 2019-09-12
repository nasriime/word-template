const fs = require("fs");
const {  Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType} = require("docx");
    

const crearePage4=(obj)=>{
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph("1 Scope..............................................................5"),
        new Paragraph("2 Acceptance KPIs....................................................5"),
        new Paragraph("2.1 Drive Test KPIs (Cluster Level)..................................5"),
        new Paragraph("2.2 OSS KPIs (Cluster Level).........................................6"),
        new Paragraph("3 Drive Test Criteria................................................6"),
        new Paragraph("4 Definitions of KPI Formula.........................................7"),
        new Paragraph("5 Drive Test Definition..............................................8"),
        new Paragraph("5.1 Drive Test device................................................8"),
    ]
}


module.exports = crearePage4;