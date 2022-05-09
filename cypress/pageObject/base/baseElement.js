export class BaseElement {
  constructor(selector) {
    this.selector = selector;
  }

  getElement() {
    return cy.get(this.selector);
  }

  click(options = {}) {
    cy.get(this.selector).click(options);
  }

  scrollToElement(options = {}) {
    cy.get(this.selector).scrollIntoView(options);
  }

  verifyElementIsDisplayed() {
    cy.get(this.selector).should('be.visible');
  }

  verifyElementIsNotVisible() {
    cy.get(this.selector).should('not.be.visible');
  }

  verifyAttributeIsCorrect(attribute, expectedValue) {
    cy.get(this.selector).should('have.attr', attribute, expectedValue);
  }
}
