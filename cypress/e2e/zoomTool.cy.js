const { boardPage } = require("../pageObjects/boardPage");

describe("Griid tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
  });

  it("zoom in", () => {
    boardPage.navigateToZoomTool();
    boardPage.validationAssertZoomIn();
  });
});
