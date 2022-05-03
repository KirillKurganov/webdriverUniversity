export class BaseElement {

  constructor(selector) {
    this.selector = selector;
  }

  getElement() {
    return cy.get(this.selector);
  }

  click() {
    cy.get(this.selector).click();
  }

  verifyElementIsVisible() {
    cy.get(this.selector).should('be.visible');
  }

  verifyAttributeIsCorrect(attribute, expectedValue) {
    cy.get(this.selector).should('have.attr', attribute, expectedValue);
  }
}