const {boardPage} = require('../pageObjects/boardPage');

describe('Griid tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
})

it('zoom in', () => {
    boardPage.navigateToZoomTool()
    cy.get('#canvas')
      .should('have.css', 'transform')
      .and('eq', 'matrix(1, 0, 0, 1, 0, 0)')
    cy.get('#canvas')
      .trigger('mousedown', 100, 100, { force: true })
      .should('have.css', 'transform')
      .and('eq', 'matrix(1, 0, 0, 1, 0, 0)')
  })
})