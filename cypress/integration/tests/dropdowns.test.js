import { DropDownsPage } from '../../pageObject/pages';

describe.skip('Drop-downs test', () => {
  const first = 0;
  const second = 1;
  const third = 2;
  const fourth = 3;

  let dropDownsPage;

  describe('Open the "Dropdowns" page', () => {
    const selectedValues = {
      python: 'Python',
      testNg: 'TestNG',
      javascript: 'JavaScript'
    };

    before(() => {
      dropDownsPage = new DropDownsPage();
      dropDownsPage.navigateTo();
      dropDownsPage.dropDownsSection.topSelect.selectOption(selectedValues.python);
      dropDownsPage.dropDownsSection.middleSelect.selectOption(selectedValues.testNg);
      dropDownsPage.dropDownsSection.bottomSelect.selectOption(selectedValues.javascript);
    });

    it('verify the top select value is correct', () => {
      const expectedResult = 'python';
      dropDownsPage.dropDownsSection.topSelect.verifyValueIsCorrect(expectedResult);
    });

    it('verify the middle select value is correct', () => {
      const expectedResult = 'testng';
      dropDownsPage.dropDownsSection.middleSelect.verifyValueIsCorrect(expectedResult);
    });

    it('verify the bottom select value is correct', () => {
      const expectedResult = 'javascript';
      dropDownsPage.dropDownsSection.bottomSelect.verifyValueIsCorrect(expectedResult);
    });

    it('verify the third checkbox is checked by default', () => {
      dropDownsPage.checkBoxesSection.verifyOptionByIndexIsChecked(third);
    });
  });

  describe('Check the other options', () => {
    before(() => {
      dropDownsPage.checkBoxesSection.checkOptionByIndex(first);
      dropDownsPage.checkBoxesSection.checkOptionByIndex(second);
      dropDownsPage.checkBoxesSection.checkOptionByIndex(fourth);
    });

    it('verify the first option is checked', () => {
      dropDownsPage.checkBoxesSection.verifyOptionByIndexIsChecked(first);
    });
  });

  describe('Reload the page', () => {
    before(() => {
      dropDownsPage.refreshPage();
    });

    it('verify the first option is unchecked', () => {
      dropDownsPage.checkBoxesSection.verifyOptionByIndexIsNotChecked(first);
    });
  });
});
