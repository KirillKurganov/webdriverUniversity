import { List } from '../../controls';

export class ToDoList extends List {
  constructor(selector) {
    super(selector);
    this.removeButtonSelector = `${this.selector} ${this.itemSelector} i`;
  }

  removeItemByIndex(index) {
    cy.get(this.removeButtonSelector).eq(index).invoke('show').click().should('not.exist');
  }

  verifyItemTextByIndex(index, expectedText) {
    cy.get(`${this.selector} ${this.itemSelector}`)
      .eq(index)
      .then((item) => {
        const actualText = item.text();
        expect(actualText.trim()).to.equal(expectedText);
      });
  }
}
