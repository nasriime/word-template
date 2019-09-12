const fs = require("fs");
const {  Document, Footer, Header, Media, Packer, Paragraph, TextRun, 
    HorizontalPositionAlign, VerticalPositionAlign, 
    HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, RelativeHorizontalPosition,
    AlignmentType, HeadingLevel, Table, WidthType, VerticalAlign, ShadingType} = require("docx");
    const pages = require('./pages');
    const createFooter = require('./footer');
    const createHeader = require('./header');


const obj={
    header:{

    },
    footer:{

    },
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

const doc = new Document(undefined, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
});


doc.addSection({
    headers: createHeader(doc),
    footers: createFooter(),
    children: [
        // *****Page 1*********
        ...pages.createPage1(doc),
        // *****Page 2*********
        ...pages.createPage2(),
        // *****Page 3*********
        ...pages.createPage3(),
        // *****Page 4**********
        ...pages.createPage4(),
        // ****Page 5***********
        ...pages.createPage5(),
        // ****Page 6***********
        ...pages.createPage6(),
        // ****Page 7***********
        ...pages.createPage7(),
        // ****Page 8***********
        ...pages.createPage8(),
        // ****Page 9***********
        ...pages.createPage9(),
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});