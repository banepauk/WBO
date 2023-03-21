const { boardPage } = require("../pageObjects/boardPage");

describe("Grid tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
  });

  it("grid change", () => {
    boardPage.noneGridValidation();
    boardPage.navigateToGridTool();
    boardPage.gridValidation();
    boardPage.navigateToGridTool();
    boardPage.dotsValidation();
  });
});
