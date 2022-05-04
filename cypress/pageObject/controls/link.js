import { BaseElement } from '../base';

export class Link extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  verifyLinkIsOpenedInNewTabAndNavigate() {
    const attribute = 'target';
    const expectedValue = '_blank';
    const hrefAttribute = 'href';

    this.verifyAttributeIsCorrect(attribute, expectedValue);
    cy.get(this.selector)
      .invoke('attr', hrefAttribute)
      .then((hrefValue) => {
        hrefValue.includes('://') ? cy.visit(hrefValue) : cy.visit(`${Cypress.env('BASE_URL')}/${hrefValue}`);
      });
  }
}
