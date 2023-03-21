export class BoardPage {
    
  constructor(a) {
    this.pencilTool = "#toolID-Pencil";
    this.straightLineTool = 'li[title="Straight line (keyboard shortcut: l) [click to toggle]"]';
    this.rectangleTool = "#toolID-Rectangle";
    this.elipseTool = "#toolID-Ellipse";
    this.textTool = "#toolID-Text";
    this.textInput = "#textToolInput";
    this.eraserTool = "#toolID-Eraser";
    this.handTool = "#toolID-Hand";
    this.gridTool = "#toolID-Grid";
    this.downloadTool = "#toolID-Download";
    this.zoomTool = "#toolID-Zoom";
    this.drawArea = "#drawingArea";
    this.containerGrid = "#gridContainer";
    this.colorTool = "#chooseColor";
    this.blackColor = "#color_001f3f";
    this.blueColor = "#color_0074D9";
    this.sizeTool = ".tool";
    this.changeSizeTool = "#chooseSize";
    this.opacityTool = ".tool";
    this.changeOpacityTool = "#chooseOpacity";
  }

  navigateToPencilTool() {
    cy.get(this.pencilTool).should("be.visible").click();
  }

  navigateToStraightLineTool() {
    cy.get(this.straightLineTool).should("be.visible").click();
  }

  navigateToRectangleTool() {
    cy.get(this.rectangleTool).should("be.visible").click();
  }

  navigateToElipseTool() {
    cy.get(this.elipseTool).should("be.visible").click();
  }

  navigateToCircleTool() {
    cy.get(this.elipseTool).should("be.visible").dblclick();
  }

  navigateToTextTool() {
    cy.get(this.textTool).should("be.visible").click();
  }

  navigateToTextInput() {
    cy.get(this.textInput).should("be.visible").type("testing text tool");
  }

  navigateToEraserTool() {
    cy.get(this.eraserTool).should("be.visible").click();
  }

  navigateToHandTool() {
    cy.get(this.handTool).should("be.visible").click();
  }

  navigateToGridTool() {
    cy.get(this.gridTool).should("be.visible").click();
  }

  navigateToDownloadTool() {
    cy.get(this.zoomTool).should("be.visible").click();
  }

  navigateToZoomTool() {
    cy.get(this.zoomTool).should("be.visible").click();
  }

  drawingArea() {
    cy.get(this.drawArea).should("be.visible");
  }

  chooseBlackColorAndDraw() {
    if ((cy.get(this.colorTool).click(), cy.get(this.blackColor).click())) {
      boardPage.navigateToRectangleTool();
      cy.get("#canvas")
        .trigger("mousedown", 100, 100, { force: true })
        .trigger("mousemove", 250, 100, { force: true })
        .trigger("mouseup", 300, 300, { force: true });
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
    cy.get(this.gridContainer).should("exist");
  }

  changeBlueColorAndDraw() {
    if ((cy.get(this.colorTool).click(), cy.get(this.blueColor).click())) {
      boardPage.navigateToRectangleTool();
      cy.get("#canvas")
        .trigger("mousedown", 100, 100, { force: true })
        .trigger("mousemove", 250, 100, { force: true })
        .trigger("mouseup", 300, 300, { force: true });
    }
  }

  changeSizeAndDraw() {
    if (
      (cy.get(this.sizeTool).eq(11).click(),
      cy
        .get(this.changeSizeTool)
        .as("range")
        .invoke("val", 10)
        .trigger("change", { force: true }))
    ) {
      boardPage.navigateToRectangleTool();
      cy.get("#canvas")
        .trigger("mousedown", 100, 100, { force: true })
        .trigger("mousemove", 250, 100, { force: true })
        .trigger("mouseup", 300, 300, { force: true });
    }
  }

  changeOpacityAndDraw() {
    if (
      (cy.get(this.opacityTool).eq(12).click(),
      cy
        .get(this.changeOpacityTool)
        .as("range")
        .invoke("val", 20)
        .trigger("change", { force: true }))
    ) {
      boardPage.navigateToRectangleTool();
      cy.get("#canvas")
        .trigger("mousedown", 100, 100, { force: true })
        .trigger("mousemove", 250, 100, { force: true })
        .trigger("mouseup", 300, 300, { force: true });
    }

    cy.get(this.opacityTool).eq(12).click();
    cy.get(this.changeOpacityTool)
      .as("range")
      .invoke("val", 20)
      .trigger("change", { force: true });
  }

  validationAssertSizeChange() {
    cy.get("#drawingArea")
      .children()
      .should("exist")
      .and("have.css", "stroke-width")
      .and("eq", "10px");
  }

  validationAssertZoomIn() {
    cy.get("#canvas")
      .should("have.css", "transform")
      .and("eq", "matrix(1, 0, 0, 1, 0, 0)");
    cy.get("#canvas")
      .trigger("mousedown", 100, 100, { force: true })
      .should("have.css", "transform")
      .and("eq", "matrix(1, 0, 0, 1, 0, 0)");
  }

  canvasEmptyValidation() {
    cy.get("#drawingArea").children().should("not.exist");
  }

  drawStraightLine() {
    cy.get("#canvas")
      .trigger("mousedown", 100, 100, { force: true })
      .trigger("mousemove", 250, 100, { force: true })
      .trigger("mouseup", 200, 200, { force: true });
  }

  validationStraightLineExist() {
    cy.get("g#drawingArea")
      .children("line")
      .should("exist")
      .and("have.attr", "x2", "200")
      .and("have.attr", "x1", "100");
  }

  textIntoInputField() {
    cy.get("#canvas").trigger("mousedown", 100, 100, { force: true });
    boardPage.navigateToTextInput();
  }

  validationTextExist() {
    cy.get("g#drawingArea")
      .children("text")
      .should("exist")
      .should("have.text", "testing text tool");
  }

  drawRectangle() {
    cy.get("#canvas")
      .trigger("mousedown", 100, 100, { force: true })
      .trigger("mousemove", 250, 100, { force: true })
      .trigger("mouseup", 200, 200, { force: true });
  }

  rectangleExistValidation() {
    cy.get("g#drawingArea")
      .children("rect")
      .should("exist")
      .and("have.attr", "x", "100")
      .and("have.attr", "y", "100");
  }

  opacityChangeValidation() {
    cy.get("#drawingArea")
      .children()
      .should("exist")
      .and("have.css", "opacity")
      .and("eq", "1");
  }

  moveScreenWithHandTool() {
    cy.get("#canvas")
      .trigger("mousedown", 500, 500, { force: true })
      .trigger("mousemove", 300, 300, { force: true })
      .trigger("mouseup", 100, 100, { force: true });
  }

  screenMovedValidation() {
    cy.get("g#drawingArea").window().its("scrollY").should("not.equal", 0);
  }

  drawEllipse() {
    cy.get("#canvas")
      .trigger("mousedown", 100, 100, { force: true })
      .trigger("mousemove", 250, 100, { force: true })
      .trigger("mouseup", 200, 200, { force: true });
  }

  ellipseExistValidation() {
    cy.get("g#drawingArea")
      .children("ellipse")
      .should("exist")
      .and("have.attr", "cy", "150")
      .and("have.attr", "rx", "50");
  }

  noneGridValidation() {
    cy.get("#gridContainer").should("have.css", "fill").and("eq", "none");
  }

  gridValidation() {
    cy.get("#gridContainer")
      .should("have.css", "fill")
      .and("eq", 'url("#grid")');
  }

  dotsValidation() {
    cy.get("#gridContainer")
      .should("have.css", "fill")
      .and("eq", 'url("#dots")');
  }

  drawLine() {
    cy.get("#canvas")
      .trigger("mousedown", 100, 100, { force: true })
      .trigger("mousemove", 250, 100, { force: true })
      .trigger("mouseup", 200, 200, { force: true });
  }

  lineExistValidation() {
    cy.get("#drawingArea").children().should("exist");
  }

  lineErase() {
    cy.get("#canvas")
      .trigger("mousedown", 100, 100, { force: true })
      .trigger("mousemove", 250, 100, { force: true })
      .trigger("mouseup", 200, 200, { force: true })
      .trigger("mousedown", 100, 100, { force: true })
      .trigger("mousemove", 250, 100, { force: true })
      .trigger("mouseup", 200, 200, { force: true });
  }

  validationColorBlack() {
    cy.get("#drawingArea")
      .children()
      .should("exist")
      .should("have.css", "stroke")
      .and("eq", "rgb(0, 31, 63)");
  }

  validationColorBlue() {
    cy.get("#drawingArea")
      .children()
      .should("exist")
      .should("have.css", "stroke")
      .and("eq", "rgb(0, 116, 217)");
  }
}

export const boardPage = new BoardPage();
