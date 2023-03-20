const {boardPage} = require('../pageObjects/boardPage');

describe('Griid tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
})

it('draw ellpise', () => {
    cy.get('#gridContainer')
      .should('have.css', 'fill')
      .and('eq', 'none')
    boardPage.navigateToGridTool()
    cy.get('#gridContainer')
      .should('have.css', 'fill')
      .and('eq', 'url("#grid")')
    boardPage.navigateToGridTool()
    cy.get('#gridContainer')
      .should('have.css', 'fill')
      .and('eq', 'url("#dots")')
  })

})