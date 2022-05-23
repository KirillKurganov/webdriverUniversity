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

    it('verify the visual snapshot is correct', () => {
      loaderPage.verifySnapshotOfThePage();
    });

    it('verify "Click me" button is displayed', () => {
      loaderPage.clickMeButton.verifyElementIsDisplayed();
    });
  });

  describe('Click the "Click me" button', () => {
    let wellDonePopup;

    before(() => {
      loaderPage.clickMeButton.click();
      wellDonePopup = new WellDoneForWaitingPopup();
    });

    it('verify the "Well Done" popup is displayed', () => {
      wellDonePopup.verifyElementIsDisplayed();
    });
  });
});
