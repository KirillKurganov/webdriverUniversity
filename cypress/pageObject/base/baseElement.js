// Page element pattern
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

  verifyElementIsDisplayed(options = {}) {
    cy.get(this.selector, options).should('be.visible');
  }

  verifyElementIsNotDisplayed(options = {}) {
    cy.get(this.selector, options).should('not.be.visible');
  }

  verifyElementIsNotExist(options = {}) {
    cy.get(this.selector, options).should('not.exist');
  }

  verifyAttributeIsCorrect(attribute, expectedValue) {
    cy.get(this.selector).should('have.attr', attribute, expectedValue);
  }
}
