const {boardPage} = require('../pageObjects/boardPage');

describe('straight line', () => {
    beforeEach(() => {
      let boardName = boardPage.randomString()
      cy.getBoardCode(boardName)
      boardPage.navigateToStraightLineTool()
  });
  
  it('straight line', () => {
    cy.wait(1000)
    cy.get('#drawingArea').children()
                          .should('not.exist');
    cy.get('#canvas')
      .trigger('mousedown', 100, 100, { force: true })
      .trigger('mousemove', 250, 100, { force: true })
      .trigger('mouseup', 200, 200, { force: true })
      cy.get('g#drawingArea')
        .children('line')
        .should('exist')
        .and('have.attr', 'x2', '200')
        .and('have.attr', 'x1', '100')
    

  })
  
  });