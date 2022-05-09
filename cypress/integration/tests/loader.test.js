import { LoaderPage } from '../../pageObject/pages';
import { WellDoneForWaitingPopup } from '../../pageObject/popups';

describe('Loader test', () => {
  let loaderPage;

  describe('Open the loader page', () => {
    before(() => {
      loaderPage = new LoaderPage();
      loaderPage.navigateTo();
      loaderPage.spinner.verifyElementIsDisplayed();
    });

    it('verify spinner disappears', () => {
      loaderPage.spinner.verifyElementIsNotVisible();
    });

    it('verify "Click me" button is displayed', () => {
      loaderPage.clickMeButton.verifyElementIsVisible();
    });
  });

  describe('Click the "Click me" button', () => {
    let wellDonePopup;

    before(() => {
      loaderPage.clickMeButton.click();
      wellDonePopup = new WellDoneForWaitingPopup();
    });

    it('verify the "Well Done" popup is displayed', () => {
      wellDonePopup.verifyElementIsVisible();
    });
  });
});
