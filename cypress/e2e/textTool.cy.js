const {boardPage} = require('../pageObjects/boardPage');

describe('Text tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
    boardPage.navigateToTextTool()
})

it('draw ellpise', () => {
    cy.wait(1000)
    cy.get('#drawingArea').children()
      .should('not.exist');
    cy.get('#canvas')
      .trigger('mousedown', 100, 100, { force: true })
    boardPage.navigateToTextInput()
    cy.get('g#drawingArea')
      .children('text')
      .should('exist')
      .should('have.text', 'testing text tool')

  })

})