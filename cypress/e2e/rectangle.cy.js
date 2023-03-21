const { boardPage } = require("../pageObjects/boardPage");

describe("Rectangle tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
    boardPage.navigateToRectangleTool();
  });

  it("draw rectangle", () => {
    boardPage.canvasEmptyValidation();
    boardPage.drawRectangle();
    boardPage.rectangleExistValidation();
  });
});
