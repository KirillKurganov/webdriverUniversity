import { HomePage } from '../../pageObject/pages';
import { ContactUsPage } from '../../pageObject/pages';

describe('Contact Us test', () => {
  let homePage;

  describe('"Contact Us" section on the home page', () => {

    before(() => {
      homePage = new HomePage();
      homePage.navigateTo();
    });

    it('verify the "Contact Us" section is displayed', () => {
      homePage.contactUsSection.verifyElementIsVisible();
    });
  });

  describe('Open the "Contact Us" section', () => {
    let contactUsPage;

    before(() => {
      homePage.contactUsSection.contactUsLink.verifyAttributeIsCorrect('target', '_blank');
      contactUsPage = new ContactUsPage();
      contactUsPage.navigateTo();
    });

    it('verify the "Contact Us" page is displayed', () => {
      contactUsPage.verifyUrlIsCorrect();
    });
  });
});