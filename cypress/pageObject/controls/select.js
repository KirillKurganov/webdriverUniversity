import { BaseElement } from '../base';

export class Select extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  selectOption(value, options = {}) {
    cy.get(this.selector).select(value, options);
  }

  verifyValueIsCorrect(expectedValue) {
    cy.get(this.selector).then((select) => {
      expect(select.val()).to.equal(expectedValue);
    });
  }
}
