const {boardPage} = require('../pageObjects/boardPage');

describe('Hand tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
    boardPage.navigateToElipseTool()
})

it('draw ellpise', () => {
    cy.wait(1000)
    cy.get('#drawingArea').children()
      .should('not.exist');
    cy.get('#canvas')
      .trigger('mousedown', 100, 100, { force: true })
      .trigger('mousemove', 250, 100, { force: true })
      .trigger('mouseup', 200, 200, { force: true })
    cy.get('g#drawingArea')
      .children('ellipse')
      .should('exist')
      .and('have.attr', 'cy', '150')
      .and('have.attr', 'rx', '50')
    boardPage.navigateToHandTool()
    cy.get('#canvas')
        .trigger('mousedown', 500, 500, { force: true })
        .trigger('mousemove', 300, 300, { force: true })
        .trigger('mouseup', 100, 100, { force: true })
    cy.get('g#drawingArea')
        .window()
        .its('scrollY')
        .should('not.equal', 0);

  })


})