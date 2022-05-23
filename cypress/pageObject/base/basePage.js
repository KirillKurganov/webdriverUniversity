export class BasePage {
  constructor(route = '') {
    this.route = route;
  }

  navigateTo() {
    cy.visit(`${Cypress.env('BASE_URL')}/${this.route}`);
  }

  verifyUrlIsCorrect() {
    cy.url().should('equal', `${Cypress.env('BASE_URL')}/${this.route}`);
  }

  refreshPage() {
    cy.reload();
  }

  verifySnapshotOfThePage(options = { allowSizeMismatch: true }) {
    cy.matchImageSnapshot(options);
  }
}
