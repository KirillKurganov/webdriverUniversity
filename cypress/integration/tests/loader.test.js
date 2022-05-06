import { LoaderPage } from '../../pageObject/pages';

describe('Loader test', () => {
  let loaderPage;

  describe('Open the loader page', () => {
    before(() => {
      loaderPage = new LoaderPage();
      loaderPage.navigateTo();
      loaderPage.spinner.verifyElementIsVisible();
    });

    it('verify spinner disappears', () => {
      loaderPage.spinner.verifyElementIsNotVisible();
    });

    it('verify "Click me" button is displayed', () => {
      loaderPage.clickMeButton.verifyElementIsVisible();
    });
  });
});
