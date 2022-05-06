import { Section } from '../../controls';

export class CheckBoxesSection extends Section {
  constructor(selector) {
    super(selector);
    this.checkBoxSelector = 'input[type="checkbox"]';
  }

  checkOptionByIndex(index) {
    cy.get(`${this.selector} ${this.checkBoxSelector}`).eq(index).check();
  }

  uncheckOptionByIndex(index) {
    cy.get(`${this.selector} ${this.checkBoxSelector}`).eq(index).uncheck();
  }

  verifyOptionByIndexIsChecked(index) {
    cy.get(`${this.selector} ${this.checkBoxSelector}`).eq(index).should('be.checked');
  }

  verifyOptionByIndexIsNotChecked(index) {
    cy.get(`${this.selector} ${this.checkBoxSelector}`).eq(index).should('not.be.checked');
  }
}
