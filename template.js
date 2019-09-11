const fs = require("fs");
const {  Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType} = require("docx");

const obj={
    page1:{
        image1Url: './bg2.jpg',
        image2Url: './bg2.jpg',
        image3Url: './bg2.jpg',
        image4Url: './bg2.jpg',
        headerText: 'LTC Header',
        footerText: 'LTC Footer',
        bodyText: 'Cluster Acceptance Report',
        date: '2019-09-10'
    },
    page2:{
        title:'',
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
            }
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
            }
        },
    });

    const image3 = Media.addImage(doc, fs.readFileSync(obj.page1.image3Url),50,50, {
        // floating: {
        //     horizontalPosition: {
        //         relative: HorizontalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: HorizontalPositionAlign.RIGHT
        //     },
        //     verticalPosition: {
        //         relative: VerticalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: VerticalPositionAlign.TOP,
        //     },
        //     margins: {
        //         bottom: 201440,
        //     },
        // },
    });
    
    const image4 = Media.addImage(doc, fs.readFileSync(obj.page1.image4Url),50,50, {
        // floating: {
        //     horizontalPosition: {
        //         relative: HorizontalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: HorizontalPositionAlign.LEFT
        //     },
        //     verticalPosition: {
        //         relative: VerticalPositionRelativeFrom.OUTSIDE_MARGIN,
        //         align: VerticalPositionAlign.TOP,
        //     },
        //     margins: {
        //         bottom: 201440,
        //     },
        // },
    });

    // ************** table1 ************

    const page1Table = new Table({
        rows: 7,
        columns: 6,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });
    
        page1Table.getRow(0).mergeCells(0, 1);
        page1Table.getRow(0).mergeCells(2, 3);
    
        page1Table.getRow(1).mergeCells(0, 1);
        page1Table.getRow(1).mergeCells(2, 3);
    
        page1Table.getRow(2).mergeCells(0, 1);
        page1Table.getRow(2).mergeCells(2, 3);
    
        page1Table.getRow(5).mergeCells(0, 1);
        page1Table.getRow(5).mergeCells(2, 3);
    
        page1Table.getRow(6).mergeCells(0, 1);
        page1Table.getRow(6).mergeCells(2, 3);
    
        page1Table.getColumn(0).mergeCells(3, 4);
        page1Table.getColumn(2).mergeCells(0, 1);
    
    // ********column 0*********
        page1Table
        .getCell(0, 0)
        .add(new Paragraph("Optimization Cluster No.:"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(1, 0)
        .add(new Paragraph("1,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(2, 0)
        .add(new Paragraph("2,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(3, 0)
        .add(new Paragraph("3,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(5, 0)
        .add(new Paragraph("5,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(6, 0)
        .add(new Paragraph("6,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
    
    // ********column 1*********
        page1Table
        .getCell(3, 1)
        .add(new Paragraph("3,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(4, 1)
        .add(new Paragraph("4,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
    
        page1Table
        .getCell(0, 1)
        .add(new Paragraph("0,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(1, 1)
        .add(new Paragraph("1,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(2, 1)
        .add(new Paragraph("2,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(3, 2)
        .add(new Paragraph("3,2"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(4, 2)
        .add(new Paragraph("4,2"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(5, 1)
        .add(new Paragraph("5,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(6, 1)
        .add(new Paragraph("6,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
    
    // ********column 2*********
        page1Table
        .getCell(0, 2)
        .add(new Paragraph("0,2"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(2, 2)
        .add(new Paragraph("2,2"))
        .setVerticalAlign(VerticalAlign.CENTER);
    
        page1Table
        .getCell(5, 2)
        .add(new Paragraph("5,2"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(6, 2)
        .add(new Paragraph("6,2"))
        .setVerticalAlign(VerticalAlign.CENTER);
    
    // ********column 3*********
        page1Table
        .getCell(0, 3)
        .add(new Paragraph("0,3"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(1, 3)
        .add(new Paragraph("1,3"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(2, 3)
        .add(new Paragraph("2,3"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(3, 3)
        .add(new Paragraph("3,3"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(4, 3)
        .add(new Paragraph("4,3"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(5, 3)
        .add(new Paragraph("5,3"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(6, 3)
        .add(new Paragraph("6,3"))
        .setVerticalAlign(VerticalAlign.CENTER);
    
         // column 4
         page1Table
         .getCell(3, 4)
         .add(new Paragraph("3,4"))
         .setVerticalAlign(VerticalAlign.CENTER);
         page1Table
         .getCell(4, 4)
         .add(new Paragraph("4,4"))
         .setVerticalAlign(VerticalAlign.CENTER);
         
    
          //column 5
          page1Table
          .getCell(3, 5)
          .add(new Paragraph("3,5"))
          .setVerticalAlign(VerticalAlign.CENTER);
          page1Table
          .getCell(4, 5)
          .add(new Paragraph("4,5"))
          .setVerticalAlign(VerticalAlign.CENTER);

    // ************** table2 ************

    const page2Table = new Table({
        rows: 21,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });

    page2Table
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })

    page2Table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

    for(var i=0; i<21 ;i++){
        page2Table
        .getCell(i, 0)
        .Properties.setWidth("20%", WidthType.PCT);
    }

    for(var i=0; i<21 ;i++){
        page2Table
        .getCell(i, 1)
        .Properties.setWidth("80%", WidthType.PCT);
    }

    // ************** table3 ************
    const page3Table = new Table({
        rows: 9,
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
        page1Table
        .getCell(1, 0)
        .add(new Paragraph("1,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(2, 0)
        .add(new Paragraph("2,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(3, 0)
        .add(new Paragraph("3,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(4, 0)
        .add(new Paragraph("4,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(5, 0)
        .add(new Paragraph("5,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(6, 0)
        .add(new Paragraph("6,0"))
        .setVerticalAlign(VerticalAlign.CENTER);

        // ********column 1*********
        page1Table
        .getCell(1, 1)
        .add(new Paragraph("1,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(2, 1)
        .add(new Paragraph("2,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(3, 1)
        .add(new Paragraph("3,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(4, 1)
        .add(new Paragraph("4,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(5, 1)
        .add(new Paragraph("5,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page1Table
        .getCell(6, 1)
        .add(new Paragraph("6,1"))
        .setVerticalAlign(VerticalAlign.CENTER);

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
                            new TextRun(`${obj.page1.date}                                  `), 
                            new TextRun(`${obj.page1.footerText}                                  `), 
                            new TextRun("Page").pageNumber(),
                            new TextRun("Total").numberOfTotalPages()
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
            // *****************Page 1**************************
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph({
                children: [image3, image4],
                alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
                text: obj.page1.bodyText,  //var
                alignment: AlignmentType.CENTER,
                heading	: HeadingLevel.TITLE
            }),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            page1Table,
            // ****************Page 2******************************
            new Paragraph({
                text: "",
                pageBreakBefore: true,
            }),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph("Table of Contents"),
            new Paragraph(""),
            new Paragraph("1 Scope..............................................................5"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            new Paragraph("2.1 Drive Test KPIs (Cluster Level)..................................5"),
            new Paragraph("2.2 OSS KPIs (Cluster Level).........................................6"),
            new Paragraph("3 Drive Test Criteria................................................6"),
            new Paragraph("4 Definitions of KPI Formula.........................................7"),
            new Paragraph("5 Drive Test Definition..............................................8"),
            new Paragraph("5.1 Drive Test device................................................8"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            new Paragraph("2 Acceptance KPIs....................................................5"),
            // ****************Page 3******************************
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
            // ****************Page 4******************************
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
            // ****************Page 5******************************
            new Paragraph({
                text: "",
                pageBreakBefore: true,
            }),
            new Paragraph({
                children: [new TextRun({
                    text:'1  Scope',
                    bold: true
                    })
                ]
            }),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph("The purpose of this document is to present the Cluster Acceptance standard and Result of TE LTE project. "),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph({
                children: [new TextRun({
                    text:'2 Acceptance KPI',
                    bold: true
                    })
                ]
            }),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph("Ninety percent (90%) of sites of the desired cluster should be on air before starting the cluster test. Only agreed special cases of some sites will be considered as standalone sites (SSV) and will be excluded from the cluster acceptance. "),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph({
                children: [new TextRun({
                    text:'2.1 Drive Test KPIs (Cluster Level)',
                    bold: true,
                    indent: 720
                    })
                ]
            }),
            new Paragraph(""),
            new Paragraph(""),
            page2Table,
            // ****************Page 6******************************
            new Paragraph({
                text: "",
                pageBreakBefore: true,
            }),
            // ****************Page 7******************************
            new Paragraph({
                text: "",
                pageBreakBefore: true,
            }),
            // ****************Page 8******************************
            new Paragraph({
                text: "",
                pageBreakBefore: true,
            }),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph({
                children: [new TextRun({
                    text:'5 Drive Test Definition',
                    bold: true
                    })
                ]
            }),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph({
                children: [new TextRun({
                    text:'5.1 Drive Test devices',
                    bold: true
                    })
                ]
            }),
            new Paragraph(""),
            new Paragraph("The followings are the general tools configuration of the drive test."),
            page3Table
        ],
    });
}