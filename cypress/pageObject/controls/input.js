import { BaseElement } from '../base';

export class Input extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  type(text) {
    cy.get(this.selector).clear().type(text);
  }

  typeAndClickEnter(text) {
    cy.get(this.selector).clear().type(`${text}{enter}`);
  }

  uploadFile(path, options = {}) {
    cy.get(this.selector).selectFile(path, options);
  }

  verifyInputValueIsCorrect(expectedValue) {
    cy.get(this.selector).should((input) => {
      expect(input.val()).to.equal(expectedValue);
    });
  }
}
