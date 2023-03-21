const { boardPage } = require("../pageObjects/boardPage");

describe("straight line", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
    boardPage.navigateToStraightLineTool();
  });

  it("straight line", () => {
    boardPage.canvasEmptyValidation();
    boardPage.drawStraightLine();
    boardPage.validationStraightLineExist();
  });
});
