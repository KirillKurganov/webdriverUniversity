import { BaseElement } from '../base';

export class CheckBox extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  check() {
    cy.get(this.selector).check();
  }

  uncheck() {
    cy.get(this.selector).uncheck();
  }

  verifyCheckBoxIsChecked() {
    cy.get(this.selector).should('be.checked');
  }

  verifyCheckBoxIsNotChecked() {
    cy.get(this.selector).should('not.be.checked');
  }
}
