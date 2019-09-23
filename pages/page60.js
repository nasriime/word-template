const fs = require("fs");
const { Media, Paragraph, TextRun, AlignmentType, Table, 
    WidthType, VerticalAlign, ShadingType } = require("docx");

const createPage60 = (obj)=>{

    // ************** table ************

    const table1 = new Table({
        rows: 11,
        columns: 5,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });


    // *********column 0*******
    table1
    .getCell(0, 0)
    .add(new Paragraph({
        text: "S/N",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table1
    .getCell(1, 0)
    .add(new Paragraph({
        text: "1",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 0)
    .add(new Paragraph({
        text: "2",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 0)
    .add(new Paragraph({
        text: "3",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 0)
    .add(new Paragraph({
        text: "4",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(5, 0)
    .add(new Paragraph({
        text: "5",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(6, 0)
    .add(new Paragraph({
        text: "6",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(7, 0)
    .add(new Paragraph({
        text: "7",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(8, 0)
    .add(new Paragraph({
        text: "8",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(9, 0)
    .add(new Paragraph({
        text: "9",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(10, 0)
    .add(new Paragraph({
        text: "10",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ********column 1********
    table1
    .getCell(0, 1)
    .add(new Paragraph({
        text: "OSS KPI (Cluster Level)",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table1
    .getCell(1, 1)
    .add(new Paragraph({
        text: "Serving RSRP",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 1)
    .add(new Paragraph({
        text: "Serving RSRQ",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 1)
    .add(new Paragraph({
        text: "Serving RS SINR",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 1)
    .add(new Paragraph({
        text: "CQI",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(5, 1)
    .add(new Paragraph({
        text: "Attach Success Rate",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(6, 1)
    .add(new Paragraph({
        text: "CSFB Setup Success Rate",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(7, 1)
    .add(new Paragraph({
        text: "LTE Intra-frequency HO Success Rate",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(8, 1)
    .add(new Paragraph({
        text: "LTE Inter-frequency HO Success Rate",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(9, 1)
    .add(new Paragraph({
        text: "Average Downlink Application User Throughput",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(10, 1)
    .add(new Paragraph({
        text: "Average Uplink Application User Throughput",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 2*******
    table1
    .getCell(0, 2)
    .add(new Paragraph({
        text: "700",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table1
    .getCell(1, 2)
    .add(new Paragraph({
        text: obj.table1.cell_1_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 2)
    .add(new Paragraph({
        text: obj.table1.cell_2_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 2)
    .add(new Paragraph({
        text: obj.table1.cell_3_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 2)
    .add(new Paragraph({
        text: obj.table1.cell_4_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(5, 2)
    .add(new Paragraph({
        text: obj.table1.cell_5_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(6, 2)
    .add(new Paragraph({
        text: obj.table1.cell_6_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(7, 2)
    .add(new Paragraph({
        text: obj.table1.cell_7_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(8, 2)
    .add(new Paragraph({
        text: obj.table1.cell_8_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(9, 2)
    .add(new Paragraph({
        text: obj.table1.cell_9_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(10, 2)
    .add(new Paragraph({
        text: obj.table1.cell_10_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 3*******
    table1
    .getCell(0, 3)
    .add(new Paragraph({
        text: "1800",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table1
    .getCell(1, 3)
    .add(new Paragraph({
        text: obj.table1.cell_1_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 3)
    .add(new Paragraph({
        text: obj.table1.cell_2_2,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 3)
    .add(new Paragraph({
        text: obj.table1.cell_3_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 3)
    .add(new Paragraph({
        text: obj.table1.cell_4_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(5, 3)
    .add(new Paragraph({
        text: obj.table1.cell_5_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(6, 3)
    .add(new Paragraph({
        text: obj.table1.cell_6_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(7, 3)
    .add(new Paragraph({
        text: obj.table1.cell_7_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(8, 3)
    .add(new Paragraph({
        text: obj.table1.cell_8_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(9, 3)
    .add(new Paragraph({
        text: obj.table1.cell_9_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(10, 3)
    .add(new Paragraph({
        text: obj.table1.cell_10_3,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // *********column 4*******
    table1
    .getCell(0, 4)
    .add(new Paragraph({
        text: "Free mode",
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER)
    .setShading({
        fill: "42c5f4",
        val: ShadingType.PERCENT_95,
        color: "4f81bd",
    })
    table1
    .getCell(1, 4)
    .add(new Paragraph({
        text: obj.table1.cell_1_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(2, 4)
    .add(new Paragraph({
        text: obj.table1.cell_2_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(3, 4)
    .add(new Paragraph({
        text: obj.table1.cell_3_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(4, 4)
    .add(new Paragraph({
        text: obj.table1.cell_4_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(5, 4)
    .add(new Paragraph({
        text: obj.table1.cell_5_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(6, 4)
    .add(new Paragraph({
        text: obj.table1.cell_6_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(7, 4)
    .add(new Paragraph({
        text: obj.table1.cell_7_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(8, 4)
    .add(new Paragraph({
        text: obj.table1.cell_8_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(9, 4)
    .add(new Paragraph({
        text: obj.table1.cell_9_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);
    table1
    .getCell(10, 4)
    .add(new Paragraph({
        text: obj.table1.cell_10_4,
        alignment: AlignmentType.CENTER,
    }))
    .setVerticalAlign(VerticalAlign.CENTER);

    // ************** table ************

    const table2 = new Table({
        rows: 15,
        columns: 4,
        width: 100,
        widthUnitType: WidthType.PERCENTAGE,
    });

   // *********column 0*******
   table2
   .getCell(0, 0)
   .add(new Paragraph({
       text: "S/N",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER)
   .setShading({
       fill: "42c5f4",
       val: ShadingType.PERCENT_95,
       color: "4f81bd",
   })
   table2
   .getCell(1, 0)
   .add(new Paragraph({
       text: "1",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(2, 0)
   .add(new Paragraph({
       text: "2",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(3, 0)
   .add(new Paragraph({
       text: "3",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(4, 0)
   .add(new Paragraph({
       text: "4",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(5, 0)
   .add(new Paragraph({
       text: "5",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(6, 0)
   .add(new Paragraph({
       text: "6",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(7, 0)
   .add(new Paragraph({
       text: "7",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(8, 0)
   .add(new Paragraph({
       text: "8",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(9, 0)
   .add(new Paragraph({
       text: "9",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(10, 0)
   .add(new Paragraph({
       text: "10",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(11, 0)
   .add(new Paragraph({
       text: "11",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(12, 0)
   .add(new Paragraph({
       text: "12",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(13, 0)
   .add(new Paragraph({
       text: "13",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(14, 0)
   .add(new Paragraph({
       text: "14",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);

   // ********column 1********
   table2
   .getCell(0, 1)
   .add(new Paragraph({
       text: "OSS KPI (Cell and Cluster Level)",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER)
   .setShading({
       fill: "42c5f4",
       val: ShadingType.PERCENT_95,
       color: "4f81bd",
   })
   table2
   .getCell(1, 1)
   .add(new Paragraph({
       text: "DL MCS Distribution",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(2, 1)
   .add(new Paragraph({
       text: "UL MCS Distribution",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(3, 1)
   .add(new Paragraph({
       text: "CQI Distribution",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(4, 1)
   .add(new Paragraph({
       text: "RACH Completion Success Rate",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(5, 1)
   .add(new Paragraph({
       text: "RRC Connection Setup Success Rate",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(6, 1)
   .add(new Paragraph({
       text: "CSFB Setup Success Rate",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(7, 1)
   .add(new Paragraph({
       text: "ERAB Drop Rate",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(8, 1)
   .add(new Paragraph({
       text: "LTE Intra-frequency HO Success Rate",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(9, 1)
   .add(new Paragraph({
       text: "LTE Inter-frequency HO Success Rate",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(10, 1)
   .add(new Paragraph({
       text: "Average DL PDCP User Throughput",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(11, 1)
   .add(new Paragraph({
       text: "Average UL PDCP User Throughput",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(12, 1)
   .add(new Paragraph({
       text: "Downlink BLER",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(13, 1)
   .add(new Paragraph({
       text: "Uplink BLER",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(14, 1)
   .add(new Paragraph({
       text: "ENB Availability",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);

   // *********column 2*******
   table2
   .getCell(0, 2)
   .add(new Paragraph({
       text: "Acceptance Target",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER)
   .setShading({
       fill: "42c5f4",
       val: ShadingType.PERCENT_95,
       color: "4f81bd",
   })
   table2
   .getCell(1, 2)
   .add(new Paragraph({
       text: ">10",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(2, 2)
   .add(new Paragraph({
       text: ">10",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(3, 2)
   .add(new Paragraph({
       text: ">10",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(4, 2)
   .add(new Paragraph({
       text: ">99%",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(5, 2)
   .add(new Paragraph({
       text: ">99%",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(6, 2)
   .add(new Paragraph({
       text: ">99%",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(7, 2)
   .add(new Paragraph({
       text: "<0.5%",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(8, 2)
   .add(new Paragraph({
       text: ">99%",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(9, 2)
   .add(new Paragraph({
       text: ">99%",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(10, 2)
   .add(new Paragraph({
       text: "-",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(11, 2)
   .add(new Paragraph({
       text: "-",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(12, 2)
   .add(new Paragraph({
       text: "-",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(13, 2)
   .add(new Paragraph({
       text: "-",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(14, 2)
   .add(new Paragraph({
       text: "-",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);

   // *********column 3*******
   table2
   .getCell(0, 3)
   .add(new Paragraph({
       text: "Test Result",
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER)
   .setShading({
       fill: "42c5f4",
       val: ShadingType.PERCENT_95,
       color: "4f81bd",
   })
   table2
   .getCell(1, 3)
   .add(new Paragraph({
       text: obj.table2.cell_1_2,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(2, 3)
   .add(new Paragraph({
       text: obj.table2.cell_2_2,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(3, 3)
   .add(new Paragraph({
       text: obj.table2.cell_3_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(4, 3)
   .add(new Paragraph({
       text: obj.table2.cell_4_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(5, 3)
   .add(new Paragraph({
       text: obj.table2.cell_5_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(6, 3)
   .add(new Paragraph({
       text: obj.table2.cell_6_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(7, 3)
   .add(new Paragraph({
       text: obj.table2.cell_7_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(8, 3)
   .add(new Paragraph({
       text: obj.table2.cell_8_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(9, 3)
   .add(new Paragraph({
       text: obj.table2.cell_9_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(10, 3)
   .add(new Paragraph({
       text: obj.table2.cell_10_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(11, 3)
   .add(new Paragraph({
       text: obj.table2.cell_11_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(12, 3)
   .add(new Paragraph({
       text: obj.table2.cell_12_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(13, 3)
   .add(new Paragraph({
       text: obj.table2.cell_13_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);
   table2
   .getCell(14, 3)
   .add(new Paragraph({
       text: obj.table2.cell_14_3,
       alignment: AlignmentType.CENTER,
   }))
   .setVerticalAlign(VerticalAlign.CENTER);

   
    return [
        new Paragraph({
            text: "",
            pageBreakBefore: true,
        }),
        new Paragraph({
            children: [new TextRun({
                text: "10 Performance Summary",
                bold: true,
                size: 23
                })
            ],
            indent:{
                start:300
            },
        }),
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "10.1 Drive Test KPIs (Cluster Level)",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:650
            },
        }),
        new Paragraph(""),
        table1,
        new Paragraph(""),
        new Paragraph({
            children: [new TextRun({
                text: "10.2 OSS KPIs (Cluster Level)",
                bold: true,
                size: 20
                })
            ],
            indent:{
                start:650
            },
        }),    
        new Paragraph(""),
        table2,
    ]
}


module.exports = createPage60;