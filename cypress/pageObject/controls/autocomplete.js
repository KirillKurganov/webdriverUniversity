import { BaseElement } from '../base';

export class Autocomplete extends BaseElement {
  constructor(selector, itemSelector = 'div') {
    super(selector);
    this.itemSelector = itemSelector;
  }

  selectItemByIndex(index) {
    cy.get(`${this.selector} ${this.itemSelector}`).eq(index).click();
  }
}
