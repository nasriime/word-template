const { Footer, Paragraph, TextRun } = require("docx");

const createFooter=(obj)=>{
    return {
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
    }
}


module.exports = createFooter;