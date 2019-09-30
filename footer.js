const { Footer, Paragraph, TextRun } = require('docx');

const createFooter = obj => {
  const getDate = () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() +
      1}-${today.getDate()}`;
    return date;
  };

  return {
    default: new Footer({
      children: [
        new Paragraph({
          children: [
            new TextRun(`${getDate()}                                  `),
            new TextRun(
              `NOKIA Confidential                                        `,
            ),
            new TextRun('Page').pageNumber(),
            new TextRun('Total').numberOfTotalPages(),
          ],
          border: {
            top: {
              color: 'auto',
              space: 1,
              value: 'single',
              size: 6,
            },
          },
        }),
      ],
    }),
  };
};

module.exports = createFooter;
