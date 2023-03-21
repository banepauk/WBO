const { boardPage } = require("../pageObjects/boardPage");

describe("Color tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
  });

  it("black color", () => {
    boardPage.chooseBlackColorAndDraw();
    boardPage.validationColorBlack();
  });

  it("blue color", () => {
    boardPage.changeBlueColorAndDraw();
    boardPage.validationColorBlue();
  });
});
