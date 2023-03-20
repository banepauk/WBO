const {boardPage} = require('../pageObjects/boardPage');

describe('Pencil tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
    boardPage.navigateToPencilTool()
});

  it('draw line', () => {
    cy.wait(1000)
    cy.get('#drawingArea').children()
                          .should('not.exist');
    cy.get('#canvas')
      .trigger('mousedown', 100, 100, { force: true })
      .trigger('mousemove', 250, 100, { force: true })
      .trigger('mouseup', 200, 200, { force: true })
    cy.get('#drawingArea').children()
                          .should('exist');

  })

  it('erase the line', () => {
    boardPage.navigateToEraserTool()
    cy.get('#canvas')
      .trigger('mousedown', 100, 100, { force: true })
      .trigger('mousemove', 250, 100, { force: true })
      .trigger('mouseup', 200, 200, { force: true })
      .trigger('mousedown', 100, 100, { force: true })
      .trigger('mousemove', 250, 100, { force: true })
      .trigger('mouseup', 200, 200, { force: true })
      cy.get('#drawingArea').children()
                            .should('not.exist');
  })


})