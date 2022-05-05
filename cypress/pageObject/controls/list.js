import { BaseElement } from '../base';

export class List extends BaseElement {
  constructor(selector) {
    super(selector);
    this.itemSelector = 'li';
  }

  verifyNumberOfItemsIsCorrect(expectedNumber) {
    cy.get(`${this.selector} ${this.itemSelector}`).then((list) => {
      expect(list.length).to.equal(expectedNumber);
    });
  }
}
