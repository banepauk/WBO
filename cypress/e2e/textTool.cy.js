const { boardPage } = require("../pageObjects/boardPage");

describe("Text tool", () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName);
    boardPage.navigateToTextTool();
  });

  it("type text in input field", () => {
    boardPage.canvasEmptyValidation();
    boardPage.textIntoInputField();
    boardPage.validationTextExist();
  });
});
