const { boardPage } = require("../pageObjects/boardPage");

describe("Hand tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
    boardPage.navigateToElipseTool();
  });

  it("move screen with hand tool", () => {
    boardPage.canvasEmptyValidation();
    boardPage.drawEllipse();
    boardPage.ellipseExistValidation();
    boardPage.navigateToHandTool();
    boardPage.moveScreenWithHandTool();
    boardPage.screenMovedValidation();
  });
});
