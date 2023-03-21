const { boardPage } = require("../pageObjects/boardPage");

describe("Opacity tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
  });

  it("change opacity", () => {
    boardPage.changeOpacityAndDraw();
    boardPage.opacityChangeValidation();
  });
});
