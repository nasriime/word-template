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
            // ...pages.createPage1(doc,obj.page1),
            // ...pages.createPage2(obj.page2),
            // ...pages.createPage3(obj.page3),
            // ...pages.createPage4(obj.page4),
            // ...pages.createPage5(obj.page5),
            // ...pages.createPage6(obj.page6),
            // ...pages.createPage7(obj.page7),
            // ...pages.createPage8(obj.page8),
            // ...pages.createPage9(obj.page9),
            // ...pages.createPage10(obj.page10),
            // ...pages.createPage11(obj.page11),
            // ...pages.createPage12(doc, obj.page12),
            // ...pages.createPage13(doc, obj.page13),
            // ...pages.createPage14(doc, obj.page14),
            // ...pages.createPage15(doc, obj.page15),
            // ...pages.createPage16(doc, obj.page16),
            // ...pages.createPage17(doc, obj.page17),
            // ...pages.createPage18(doc, obj.page18),
            // ...pages.createPage19(doc, obj.page19),
            // ...pages.createPage20(doc, obj.page20),
            // ...pages.createPage21(doc, obj.page21),
            // ...pages.createPage22(doc, obj.page22),
            // ...pages.createPage23(doc, obj.page23),
            // ...pages.createPage24(doc, obj.page24),
            // ...pages.createPage25(doc, obj.page25),
            // ...pages.createPage26(doc, obj.page26),
            // ...pages.createPage27(doc, obj.page27),
            // ...pages.createPage28(doc, obj.page28),
            // ...pages.createPage29(doc, obj.page29),
            // ...pages.createPage30(doc, obj.page30),
            // ...pages.createPage31(doc, obj.page31),
            // ...pages.createPage32(doc, obj.page32),
            // ...pages.createPage33(doc, obj.page33),
            // ...pages.createPage34(doc, obj.page34),
            // ...pages.createPage35(doc, obj.page35),
            // ...pages.createPage36(doc, obj.page36),
            // ...pages.createPage37(doc, obj.page37),
            // ...pages.createPage38(doc, obj.page38),
            // ...pages.createPage39(doc, obj.page39),
            // ...pages.createPage40(doc, obj.page40),
            // ...pages.createPage41(doc, obj.page41),
            // ...pages.createPage42(doc, obj.page42),
            // ...pages.createPage43(doc, obj.page43),
            // ...pages.createPage44(doc, obj.page44),
            // ...pages.createPage45(doc, obj.page45),
            // ...pages.createPage46(doc, obj.page46),
            // ...pages.createPage47(doc, obj.page47),
            // ...pages.createPage48(doc, obj.page48),
            // ...pages.createPage49(doc, obj.page49),
            // ...pages.createPage50(doc, obj.page50),
            // ...pages.createPage51(doc, obj.page51),
            // ...pages.createPage52(doc, obj.page52),
            // ...pages.createPage53(doc, obj.page53),
            // ...pages.createPage54(doc, obj.page54),
            // ...pages.createPage55(doc, obj.page55),
            // ...pages.createPage56(doc, obj.page56),
            ...pages.createPage57(obj.page57),
            // ...pages.createPage58(obj.page58),
            ...pages.createPage59(obj.page59),
            // ...pages.createPage60(obj.page60),
            // ...pages.createPage61(obj.page61),
        ],
    });
    
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("Nokia.docx", buffer);
    });
}

createTemplate(obj);

// module.exports = createTemplate;