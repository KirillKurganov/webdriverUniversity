import { DatePickerPage } from '../../pageObject/pages';

describe('DatePicker test', () => {
  let datePickerPage;

  describe('Open the datePicker page', () => {
    before(() => {
      datePickerPage = new DatePickerPage();
      datePickerPage.navigateTo();
    });

    it('verify datePicker is displayed on the page', () => {
      datePickerPage.datePicker.verifyElementIsDisplayed();
    });
  });

  describe('Select a full date', () => {
    const date = {
      year: '2040',
      month: 'Feb',
      day: '24'
    };

    before(() => {
      datePickerPage.datePicker.openCalendar();
      datePickerPage.datePicker.clickToggle({ force: true });
      datePickerPage.datePicker.clickToggle({ force: true });
      datePickerPage.datePicker.nextButton.click({ force: true });
      datePickerPage.datePicker.nextButton.click({ force: true });
      datePickerPage.datePicker.selectFullDate(date);
    });

    it('verify selected date is displayed', () => {
      const expectedValue = '02-24-2040';
      datePickerPage.datePicker.inputField.verifyInputValueIsCorrect(expectedValue);
    });
  });
});
