const {boardPage} = require('../pageObjects/boardPage');

describe('Size tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
})

it('change size', () => {
 boardPage.changeSizeAndDraw()
    cy.get('#drawingArea').children()
    .should('exist').and('have.css', 'stroke-width').and('eq', '10px')
  })
})