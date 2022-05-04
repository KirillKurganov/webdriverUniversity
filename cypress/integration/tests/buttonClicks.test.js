import { HomePage } from '../../pageObject/pages';
import { ButtonClicksPage } from '../../pageObject/pages';
import { CongratulationsPopup } from '../../pageObject/popups/buttonClicksPagePopups';
import { ItIsEasyPopup } from '../../pageObject/popups/buttonClicksPagePopups';
import { WellDonePopup } from '../../pageObject/popups/buttonClicksPagePopups';

describe('Button Clicks test', () => {
  let homePage;
  let buttonClicksPage;
  let congratulationsPopup;
  let itIsEasyPopup;
  let wellDonePopup;

  describe('Open the home page', () => {
    before(() => {
      homePage = new HomePage();
      homePage.navigateTo();
      homePage.buttonClicksSection.scrollToElement();
    });

    it('verify the "Button Clicks" title is displayed', () => {
      homePage.buttonClicksSection.title.verifyElementIsVisible();
    });
  });

  describe('Open the "Button Clicks" section', () => {
    before(() => {
      homePage.buttonClicksSection.buttonClicksLink.verifyLinkIsOpenedInNewTabAndNavigate();
      buttonClicksPage = new ButtonClicksPage();
    });

    it('verify the "Contact Us" page is displayed', () => {
      buttonClicksPage.verifyUrlIsCorrect();
    });
  });

  describe('Click the "Click me" button', () => {
    before(() => {
      buttonClicksPage.webElementClickSection.clickMeButton.click();
      congratulationsPopup = new CongratulationsPopup();
    });

    it('verify the "Congratulations" popup is displayed', () => {
      congratulationsPopup.verifyElementIsVisible();
    });
  });

  describe('Click the "Close" button', () => {
    before(() => {
      congratulationsPopup.closeButton.click();
    });

    it('verify the "Congratulations" popup is not displayed', () => {
      congratulationsPopup.verifyElementIsNotVisible();
    });
  });

  describe('Click the "Click me" button', () => {
    before(() => {
      buttonClicksPage.javaScriptClickSection.clickMeButton.click({ force: true });
      itIsEasyPopup = new ItIsEasyPopup();
    });

    it('verify the "Congratulations" popup is displayed', () => {
      itIsEasyPopup.verifyElementIsVisible();
    });
  });

  describe('Click the "Close" button', () => {
    before(() => {
      itIsEasyPopup.closeButton.click();
    });

    it('verify the "Congratulations" popup is not displayed', () => {
      itIsEasyPopup.verifyElementIsNotVisible();
    });
  });

  describe('Click the "Click me" button', () => {
    before(() => {
      buttonClicksPage.actionMoveAndClickSection.clickMeButton.click({ force: true });
      wellDonePopup = new WellDonePopup();
    });

    it('verify the "Congratulations" popup is displayed', () => {
      wellDonePopup.verifyElementIsVisible();
    });
  });

  describe('Click the "Close" button', () => {
    before(() => {
      wellDonePopup.closeButton.click();
    });

    it('verify the "Congratulations" popup is not displayed', () => {
      wellDonePopup.verifyElementIsNotVisible();
    });
  });
});
