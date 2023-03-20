export class BoardPage {
    constructor(a) {
        this.pencilTool = '#toolID-Pencil';
        this.straightLineTool = 'li[title="Straight line (keyboard shortcut: l) [click to toggle]"]';
        this.rectangleTool = '#toolID-Rectangle';
        this.elipseTool = '#toolID-Ellipse';
        this.textTool = '#toolID-Text';
        this.textInput = '#textToolInput'
        this.eraserTool = '#toolID-Eraser';
        this.handTool = '#toolID-Hand';
        this.gridTool = '#toolID-Grid';
        this.downloadTool = '#toolID-Download';
        this.zoomTool = '#toolID-Zoom';
        this.drawArea = '#drawingArea';
        this.containerGrid = '#gridContainer';
        this.colorTool = '#chooseColor';
        this.blackColor = '#color_001f3f';
        this.blueColor = '#color_0074D9';
        this.sizeTool = '.tool';
        this.changeSizeTool = '#chooseSize'
        this.opacityTool = '.tool';
        this.changeOpacityTool = '#chooseOpacity'
    }

    navigateToPencilTool() {
        cy.get(this.pencilTool).should('be.visible').click();
    }

    navigateToStraightLineTool() {
        cy.get(this.straightLineTool).should('be.visible').click();
    }

    navigateToRectangleTool() {
        cy.get(this.rectangleTool).should('be.visible').click();
    }

    navigateToElipseTool() {
        cy.get(this.elipseTool).should('be.visible').click();
    }

    navigateToCircleTool() {
        cy.get(this.elipseTool).should('be.visible').dblclick();
    }

    navigateToTextTool() {
        cy.get(this.textTool).should('be.visible').click();
    }

    navigateToTextInput() {
        cy.get(this.textInput).should('be.visible').type('testing text tool');
    }

    navigateToEraserTool() {
        cy.get(this.eraserTool).should('be.visible').click();
    }

    navigateToHandTool() {
        cy.get(this.handTool).should('be.visible').click();
    }

    navigateToGridTool() {
        cy.get(this.gridTool).should('be.visible').click();
    }

    navigateToDownloadTool() {
        cy.get(this.zoomTool).should('be.visible').click();
    }

    navigateToZoomTool() {
        cy.get(this.zoomTool).should('be.visible').click();
    }

    drawingArea () {
        cy.get(this.drawArea).should('be.visible')
    }

    chooseBlackColorAndDraw() {
        if (cy.get(this.colorTool).click(),
            cy.get(this.blackColor).click()){
                boardPage.navigateToRectangleTool()
                cy.get('#canvas')
                  .trigger('mousedown', 100, 100, { force: true })
                  .trigger('mousemove', 250, 100, { force: true })
                  .trigger('mouseup', 300, 300, { force: true })
        }
    }

    randomString() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      }

      gridContainer() {
        cy.get(this.gridContainer).should('exist')
      }

     changeBlueColorAndDraw() {
        if (cy.get(this.colorTool).click(),
            cy.get(this.blueColor).click()) {
                boardPage.navigateToRectangleTool()
                cy.get('#canvas')
                  .trigger('mousedown', 100, 100, { force: true })
                  .trigger('mousemove', 250, 100, { force: true })
                  .trigger('mouseup', 300, 300, { force: true })
        }
     }

     changeSizeAndDraw(){
        if (cy.get(this.sizeTool).eq(11).click(),
            cy.get(this.changeSizeTool)
              .as('range')
              .invoke('val', 10)
              .trigger('change',{ force: true })) {
                boardPage.navigateToRectangleTool()
                cy.get('#canvas')
                  .trigger('mousedown', 100, 100, { force: true })
                  .trigger('mousemove', 250, 100, { force: true })
                  .trigger('mouseup', 300, 300, { force: true })
              }
     }

     changeOpacityAndDraw(){
        if (cy.get(this.opacityTool).eq(12).click(),
            cy.get(this.changeOpacityTool)
              .as('range')
              .invoke('val', 20)
              .trigger('change',{ force: true })) {
                boardPage.navigateToRectangleTool()
                cy.get('#canvas')
                  .trigger('mousedown', 100, 100, { force: true })
                  .trigger('mousemove', 250, 100, { force: true })
                  .trigger('mouseup', 300, 300, { force: true })
        }


        cy.get(this.opacityTool).eq(12).click()
        cy.get(this.changeOpacityTool).as('range')
        .invoke('val', 20)
        .trigger('change',{ force: true })
     }


}

export const boardPage = new BoardPage();