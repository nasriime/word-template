const fs = require("fs");
const { Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType } = require("docx");
const pages = require('./pages');
const createFooter = require('./footer');
const createHeader = require('./header');
const obj = require('./sample_object');

const createTemplate = (obj)=>{

    const doc = new Document(undefined, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    });
    
    doc.addSection({
        headers: createHeader(doc,obj.header),
        footers: createFooter(obj.footer),
        children: [
            ...pages.createPage1(doc,obj.page1),
            ...pages.createPage2(obj.page2),
            ...pages.createPage3(obj.page3),
            ...pages.createPage4(obj.page4),
            ...pages.createPage5(obj.page5),
            ...pages.createPage6(obj.page6),
            ...pages.createPage7(obj.page7),
            ...pages.createPage8(obj.page8),
            ...pages.createPage9(obj.page9),
            ...pages.createPage10(obj.page10),
            ...pages.createPage11(obj.page11),
            ...pages.createPage14(doc, obj.page14),
            ...pages.createPage15(doc, obj.page15),
            ...pages.createPage16(doc, obj.page16),
        ],
    });
    
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });
}

createTemplate(obj);

// module.exports = createTemplate;