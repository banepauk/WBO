const {boardPage} = require('../pageObjects/boardPage');

describe('Color tool', () => {
  beforeEach(() => {
    let boardName = boardPage.randomString();
    cy.getBoardCode(boardName)
})

it('black color', () => {
   boardPage.chooseBlackColorAndDraw()
    cy.get('#drawingArea')
      .children()
      .should('exist')
      .should('have.css', 'stroke').and('eq', 'rgb(0, 31, 63)')
  })

it('blue color', () => {
    boardPage.changeBlueColorAndDraw()
    cy.get('#drawingArea')
      .children()
      .should('exist')
      .should('have.css', 'stroke').and('eq', 'rgb(0, 116, 217)')
})
})