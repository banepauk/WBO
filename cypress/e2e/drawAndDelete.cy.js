const { boardPage } = require("../pageObjects/boardPage");

describe("Pencil and delete tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
    boardPage.navigateToPencilTool();
  });

  it("draw line", () => {
    boardPage.canvasEmptyValidation();
    boardPage.drawLine();
    boardPage.lineExistValidation();
  });

  it("erase the line", () => {
    boardPage.navigateToEraserTool();
    boardPage.lineErase();
    boardPage.canvasEmptyValidation();
  });
});
