import { BaseElement } from '../base';

export class Input extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  type(text) {
    cy.get(this.selector).type(text);
  }

  verifyInputValueIsCorrect(expectedValue) {
    cy.get(this.selector).should((input) => {
      expect(input.val()).to.equal(expectedValue);
    });
  }
}
