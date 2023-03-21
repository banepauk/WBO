const { boardPage } = require("../pageObjects/boardPage");

describe("Size tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
  });

  it("change size", () => {
    boardPage.changeSizeAndDraw();
    boardPage.validationAssertSizeChange();
  });
});
