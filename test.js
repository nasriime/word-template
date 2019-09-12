const fs = require("fs");
const {  Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType} = require("docx");
    const pages =  require('./pages');

const doc = new Document(undefined, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
});

const image1 = Media.addImage(doc, fs.readFileSync("./bg2.jpg"),50,50, {
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

const image2 = Media.addImage(doc, fs.readFileSync("./bg2.jpg"),50,50, {
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

const image3 = Media.addImage(doc, fs.readFileSync("./bg2.jpg"),50,50, {
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

const image4 = Media.addImage(doc, fs.readFileSync("./bg2.jpg"),50,50, {
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

    // *********column 0*******
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

    // ********column 1********
    page1Table
    .getCell(3, 1)
    .add(new Paragraph("3,1"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(4, 1)
    .add(new Paragraph("4,1"))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *******column 2*******
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

    // *******column 2*********
    page1Table
    .getCell(0, 2)
    .add(new Paragraph("0,2"))
    .setVerticalAlign(VerticalAlign.CENTER);
    page1Table
    .getCell(1, 2)
    .add(new Paragraph("1,2"))
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

          // ************** table4 ************
          const page4Table = new Table({
            rows: 20,
            columns: 2,
            width: 4535,
            widthUnitType: WidthType.DXA,
        });
    
        page4Table
        .getCell(0, 0)
        .add(new Paragraph("0,0"))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "auto",
        })
    
        page4Table
        .getCell(0, 1)
        .add(new Paragraph("0,1"))
        .setVerticalAlign(VerticalAlign.CENTER)
        .setShading({
            fill: "42c5f4",
            val: ShadingType.PERCENT_95,
            color: "auto",
        });
    
        // ********column 0*********
        page4Table
        .getCell(1, 0)
        .add(new Paragraph("1,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(2, 0)
        .add(new Paragraph("2,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(3, 0)
        .add(new Paragraph("3,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(4, 0)
        .add(new Paragraph("4,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(5, 0)
        .add(new Paragraph("5,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(6, 0)
        .add(new Paragraph("6,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(7, 0)
        .add(new Paragraph("7,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(8, 0)
        .add(new Paragraph("8,0"))
        .setVerticalAlign(VerticalAlign.CENTER);

        // ********column 1*********
        page4Table
        .getCell(1, 1)
        .add(new Paragraph("1,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(2, 1)
        .add(new Paragraph("2,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(3, 1)
        .add(new Paragraph("3,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(4, 1)
        .add(new Paragraph("4,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(5, 1)
        .add(new Paragraph("5,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(6, 1)
        .add(new Paragraph("6,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(7, 1)
        .add(new Paragraph("7,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page4Table
        .getCell(8, 1)
        .add(new Paragraph("8,1"))
        .setVerticalAlign(VerticalAlign.CENTER);

    // ************** table5 ************
    const page5Table = new Table({
        rows: 9,
        columns: 2,
        width: 4535,
        widthUnitType: WidthType.DXA,
    });

    page5Table
    .getCell(0, 0)
    .add(new Paragraph("0,0"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    })

    page5Table
    .getCell(0, 1)
    .add(new Paragraph("0,1"))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "auto",
    });

        // ********column 0*********
        page5Table
        .getCell(1, 0)
        .add(new Paragraph("1,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(2, 0)
        .add(new Paragraph("2,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(3, 0)
        .add(new Paragraph("3,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(4, 0)
        .add(new Paragraph("4,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(5, 0)
        .add(new Paragraph("5,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(6, 0)
        .add(new Paragraph("6,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(7, 0)
        .add(new Paragraph("7,0"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(8, 0)
        .add(new Paragraph("8,0"))
        .setVerticalAlign(VerticalAlign.CENTER);

        // ********column 1*********
        page5Table
        .getCell(1, 1)
        .add(new Paragraph("1,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(2, 1)
        .add(new Paragraph("2,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(3, 1)
        .add(new Paragraph("3,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(4, 1)
        .add(new Paragraph("4,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(5, 1)
        .add(new Paragraph("5,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(6, 1)
        .add(new Paragraph("6,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(7, 1)
        .add(new Paragraph("7,1"))
        .setVerticalAlign(VerticalAlign.CENTER);
        page5Table
        .getCell(8, 1)
        .add(new Paragraph("8,1"))
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
                    text: "LTE Cluster Acceptance Report",
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
                        new TextRun("2019-09-11                                  "), 
                        new TextRun("NOKIA Confidential                                 "), 
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
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph({
        //     children: [image3, image4],
        //     alignment: AlignmentType.CENTER,
        // }),
        // new Paragraph({
        //     text: "Cluster Acceptance Report",
        //     alignment: AlignmentType.CENTER,
        //     heading	: HeadingLevel.TITLE
        // }),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // page1Table,
        ...pages.createPage1(doc),
        // ****************Page 2******************************
        // new Paragraph({
        //     text: "",
        //     pageBreakBefore: true,
        // }),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph("Table of Contents"),
        // new Paragraph(""),
        // new Paragraph("1 Scope..............................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2.1 Drive Test KPIs (Cluster Level)..................................5"),
        // new Paragraph("2.2 OSS KPIs (Cluster Level).........................................6"),
        // new Paragraph("3 Drive Test Criteria................................................6"),
        // new Paragraph("4 Definitions of KPI Formula.........................................7"),
        // new Paragraph("5 Drive Test Definition..............................................8"),
        // new Paragraph("5.1 Drive Test device................................................8"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        ...pages.createPage2(),
        // ****************Page 3******************************
        // new Paragraph({
        //     text: "",
        //     pageBreakBefore: true,
        // }),
        // new Paragraph("1 Scope..............................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2.1 Drive Test KPIs (Cluster Level)..................................5"),
        // new Paragraph("2.2 OSS KPIs (Cluster Level).........................................6"),
        // new Paragraph("3 Drive Test Criteria................................................6"),
        // new Paragraph("4 Definitions of KPI Formula.........................................7"),
        // new Paragraph("5 Drive Test Definition..............................................8"),
        // new Paragraph("5.1 Drive Test device................................................8"),
        ...pages.createPage3(),
        // ****************Page 4******************************
        // new Paragraph({
        //     text: "",
        //     pageBreakBefore: true,
        // }),
        // new Paragraph("1 Scope..............................................................5"),
        // new Paragraph("2 Acceptance KPIs....................................................5"),
        // new Paragraph("2.1 Drive Test KPIs (Cluster Level)..................................5"),
        // new Paragraph("2.2 OSS KPIs (Cluster Level).........................................6"),
        // new Paragraph("3 Drive Test Criteria................................................6"),
        // new Paragraph("4 Definitions of KPI Formula.........................................7"),
        // new Paragraph("5 Drive Test Definition..............................................8"),
        // new Paragraph("5.1 Drive Test device................................................8"),
        ...pages.createPage4(),
        // ****************Page 5******************************
        // new Paragraph({
        //     text: "",
        //     pageBreakBefore: true,
        // }),
        // new Paragraph({
        //     children: [new TextRun({
        //         text:'1  Scope',
        //         bold: true
        //         })
        //     ]
        // }),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph("The purpose of this document is to present the Cluster Acceptance standard and Result of TE LTE project. "),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph({
        //     children: [new TextRun({
        //         text:'2 Acceptance KPI',
        //         bold: true
        //         })
        //     ]
        // }),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph("Ninety percent (90%) of sites of the desired cluster should be on air before starting the cluster test. Only agreed special cases of some sites will be considered as standalone sites (SSV) and will be excluded from the cluster acceptance. "),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph({
        //     children: [new TextRun({
        //         text:'2.1 Drive Test KPIs (Cluster Level)',
        //         bold: true,
        //         indent: 720
        //         })
        //     ]
        // }),
        // new Paragraph(""),
        // new Paragraph(""),
        // page2Table,
        ...pages.createPage5(),
        // ****************Page 6******************************
        // new Paragraph({
        //     text: "",
        //     pageBreakBefore: true,
        // }),
        // new Paragraph({
        //     children: [new TextRun({
        //         text:'2.2 OSS KPIs (Cluster Level)',
        //         bold: true
        //         })
        //     ]
        // }),
        // new Paragraph(""),
        // page3Table,
        // new Paragraph(""),
        // new Paragraph({
        //     children: [new TextRun({
        //         text:'Drive Test Criteria',
        //         bold: true
        //         })
        //     ]
        // }),
        // new Paragraph("Detailed routes are considered  shared for validation before DT start."),
        // new Paragraph("OSS RFP KPIs commitment to be communicated"),
        // new Paragraph("Below rounds to be considered in DT and targets following DT RFP commitment."),
        // new Paragraph("a) L700 locked connected:"),
        // new Paragraph("Round 1: UE DL + UE CSFB MO."),
        // new Paragraph("Round 2: UE DL 100% load."),
        // new Paragraph("Round 3: UE UL."),
        // new Paragraph("b) L1800 locked connected:"),
        // new Paragraph("Round 4: UE DL + UE CSFB MT."),
        // new Paragraph("Round 5: UE DL 100% load."),
        // new Paragraph("Round 6: UE UL."),
        // new Paragraph("c) Free Connected:"),
        // new Paragraph("Round 7: UE DL + IDLE."),
        ...pages.createPage6(),
        // ****************Page 7******************************
        // new Paragraph({
        //     text: "",
        //     pageBreakBefore: true,
        // }),
        // new Paragraph("Round 8: (You tube + Web browsing in same round) (Measurements Only)."),
        // new Paragraph("In parallel design validation should be assessed following Nokia RFP commitment and taking into consideration the below KPIs:"),
        // new Paragraph("Within 4db of the best server:"),
        // new Paragraph("% of area with 4 servers or more should be <2%"),
        // new Paragraph("% of area with 2 servers or more should be <35%"),
        // new Paragraph("Within 10db of the best server:"),
        // new Paragraph("% of area with 7 servers or more should be <2%"),
        // new Paragraph("Average and % of achievement for both 700Mhz and 1800Mhz under 100% load following “TE_RFP_Coverage Results_v16” design commitment sheet for (RSRP, RSRQ, SNR, DL and UL Throughput)."),
        // new Paragraph(""),
        // new Paragraph({
        //     children: [new TextRun({
        //         text:'4 Definitions of KPI Formula',
        //         bold: true
        //         })
        //     ]
        // }),
        // new Paragraph(""),
        // page4Table,
        ...pages.createPage7(),
        // ****************Page 8******************************
        // new Paragraph({
        //     text: "",
        //     pageBreakBefore: true,
        // }),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph({
        //     children: [new TextRun({
        //         text:'5 Drive Test Definition',
        //         bold: true
        //         })
        //     ]
        // }),
        // new Paragraph(""),
        // new Paragraph(""),
        // new Paragraph({
        //     children: [new TextRun({
        //         text:'5.1 Drive Test devices',
        //         bold: true
        //         })
        //     ]
        // }),
        // new Paragraph(""),
        // new Paragraph("The followings are the general tools configuration of the drive test."),
        // new Paragraph(""),
        // page5Table,
        ...pages.createPage8(),
        // ****************Page 9******************************
        // new Paragraph({
        //     text: "",
        //     pageBreakBefore: true,
        // }),
        // new Paragraph(""),
        // new Paragraph("Cluster Site List"),
        ...pages.createPage9(),
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});