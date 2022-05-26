import { HomePage } from '../../pageObject/pages';
import { ButtonClicksPage } from '../../pageObject/pages';
import { CongratulationsPopup } from '../../pageObject/popups';
import { ItIsEasyPopup } from '../../pageObject/popups';
import { WellDonePopup } from '../../pageObject/popups';

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
      homePage.buttonClicksSection.title.verifyElementIsDisplayed();
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
      congratulationsPopup.verifyElementIsDisplayed();
    });
  });

  describe('Click the "Close" button', () => {
    before(() => {
      congratulationsPopup.closeButton.click();
    });

    it('verify the "Congratulations" popup is not displayed', () => {
      congratulationsPopup.verifyElementIsNotDisplayed();
    });
  });

  describe('Click the "Click me" button', () => {
    before(() => {
      buttonClicksPage.javaScriptClickSection.clickMeButton.click({ force: true });
      itIsEasyPopup = new ItIsEasyPopup();
    });

    it('verify the "Congratulations" popup is displayed', () => {
      itIsEasyPopup.verifyElementIsDisplayed();
    });
  });

  describe('Click the "Close" button', () => {
    before(() => {
      itIsEasyPopup.closeButton.click();
    });

    it('verify the "Congratulations" popup is not displayed', () => {
      itIsEasyPopup.verifyElementIsNotDisplayed();
    });
  });

  describe('Click the "Click me" button', () => {
    before(() => {
      buttonClicksPage.actionMoveAndClickSection.clickMeButton.click({ force: true });
      wellDonePopup = new WellDonePopup();
    });

    it('verify the "Congratulations" popup is displayed', () => {
      wellDonePopup.verifyElementIsDisplayed();
    });
  });

  describe('Click the "Close" button', () => {
    before(() => {
      wellDonePopup.closeButton.click();
    });

    it('verify the "Congratulations" popup is not displayed', () => {
      wellDonePopup.verifyElementIsNotDisplayed();
    });
  });
});
