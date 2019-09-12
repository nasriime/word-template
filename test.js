const fs = require("fs");
const { Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType } = require("docx");
const pages = require('./pages');
const createFooter = require('./footer');
const createHeader = require('./header');


const obj={
    header:{ },
    footer:{ },
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
    page2:{ },
    page3:{ },
    page4:{ },
    page5:{ },
    page6:{ },
    page7:{ },
    page8:{ },
    page9:{ },
    page10:{ },
    page11:{ },
}

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
        // *****Page 1*********
        ...pages.createPage1(doc,obj.page1),
        // *****Page 2*********
        ...pages.createPage2(obj.page2),
        // *****Page 3*********
        ...pages.createPage3(obj.page3),
        // *****Page 4**********
        ...pages.createPage4(obj.page4),
        // ****Page 5***********
        ...pages.createPage5(obj.page5),
        // ****Page 6***********
        ...pages.createPage6(obj.page6),
        // ****Page 7***********
        ...pages.createPage7(obj.page7),
        // ****Page 8***********
        ...pages.createPage8(obj.page8),
        // ****Page 9***********
        ...pages.createPage9(obj.page9),
        // ****Page 10***********
        ...pages.createPage10(obj.page10),
        // ****Page 11***********
        ...pages.createPage11(obj.page11),
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});