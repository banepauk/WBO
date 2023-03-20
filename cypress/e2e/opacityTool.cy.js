const {boardPage} = require('../pageObjects/boardPage');

describe('Opacity tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
})

it('change opacity', () => {
   boardPage.changeOpacityAndDraw()
    cy.get('#drawingArea').children()
    .should('exist').and('have.css', 'opacity').and('eq', '1')
  })
})