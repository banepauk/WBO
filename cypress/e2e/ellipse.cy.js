const { boardPage } = require("../pageObjects/boardPage");

describe("Ellipse tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
    boardPage.navigateToElipseTool();
  });

  it("draw ellipse", () => {
    boardPage.canvasEmptyValidation();
    boardPage.drawEllipse();
    boardPage.ellipseExistValidation();
  });
});
