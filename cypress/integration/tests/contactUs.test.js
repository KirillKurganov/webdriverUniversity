import { HomePage } from '../../pageObject/pages';
import { ContactUsPage } from '../../pageObject/pages';
import { ThankYouForYourMessagePage } from '../../pageObject/pages';

describe('Contact Us test', () => {
  const firstName = 'firstName';
  const lastName = 'lastName';
  const email = 'email@smth.com';
  const comments = 'some comment content';

  let homePage;
  let contactUsPage;

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
    before(() => {
      homePage.contactUsSection.contactUsLink.verifyLinkIsOpenedInNewTabAndNavigate();
      contactUsPage = new ContactUsPage();
    });

    it('verify the "Contact Us" page is displayed', () => {
      contactUsPage.verifyUrlIsCorrect();
    });
  });

  describe('Fill in fields with text', () => {
    before(() => {
      contactUsPage.firstNameField.type(firstName);
      contactUsPage.lastNameField.type(lastName);
      contactUsPage.emailAddressField.type(email);
      contactUsPage.commentsField.type(comments);
    });

    it('verify the input value is displayed in the firstName Field', () => {
      contactUsPage.firstNameField.verifyInputValueIsCorrect(firstName);
    });

    it('verify the input value is displayed in the lastName field', () => {
      contactUsPage.lastNameField.verifyInputValueIsCorrect(lastName);
    });

    it('verify the input value is displayed in the email address field', () => {
      contactUsPage.emailAddressField.verifyInputValueIsCorrect(email);
    });

    it('verify the input value is displayed in the email address field', () => {
      contactUsPage.commentsField.verifyInputValueIsCorrect(comments);
    });
  });

  describe('Click the "Reset" button', () => {
    const emptyValue = '';

    before(() => {
      contactUsPage.resetButton.click();
    });

    it('verify the input value is displayed in the firstName Field', () => {
      contactUsPage.firstNameField.verifyInputValueIsCorrect(emptyValue);
    });

    it('verify the input value is displayed in the lastName field', () => {
      contactUsPage.lastNameField.verifyInputValueIsCorrect(emptyValue);
    });

    it('verify the input value is displayed in the email address field', () => {
      contactUsPage.emailAddressField.verifyInputValueIsCorrect(emptyValue);
    });

    it('verify the input value is displayed in the email address field', () => {
      contactUsPage.commentsField.verifyInputValueIsCorrect(emptyValue);
    });
  });

  describe('Submit the form', () => {
    let thankYouForYourMessagePage;

    before(() => {
      contactUsPage.firstNameField.type(firstName);
      contactUsPage.lastNameField.type(lastName);
      contactUsPage.emailAddressField.type(email);
      contactUsPage.commentsField.type(comments);
      contactUsPage.submitButton.click();
      thankYouForYourMessagePage = new ThankYouForYourMessagePage();
    });

    it('verify the "Thank you" page is displayed', () => {
      thankYouForYourMessagePage.title.verifyElementIsVisible();
    });
  });
});
