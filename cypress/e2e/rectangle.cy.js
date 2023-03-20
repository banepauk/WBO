const {boardPage} = require('../pageObjects/boardPage');

describe('Rectangle tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
    boardPage.navigateToRectangleTool()
})

it('draw rectangle', () => {
    cy.wait(1000)
    cy.get('#drawingArea').children()
      .should('not.exist');
    cy.get('#canvas')
      .trigger('mousedown', 100, 100, { force: true })
      .trigger('mousemove', 250, 100, { force: true })
      .trigger('mouseup', 200, 200, { force: true })
    cy.get('g#drawingArea')
      .children('rect')
      .should('exist')
      .and('have.attr', 'x', '100')
      .and('have.attr', 'y', '100')

  })

})