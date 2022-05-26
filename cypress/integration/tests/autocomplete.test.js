import { AutocompletePage } from '../../pageObject/pages';

describe('Autocomplete test', () => {
  const products = ['a', 'b', 'c', 'd', 'e', 'r', 'q', 'w', 'z'];

  let autocompletePage;

  describe('Open the autocomplete page', () => {
    before(() => {
      autocompletePage = new AutocompletePage();
      autocompletePage.navigateTo();
    });

    it('verify autocomplete title is displayed', () => {
      autocompletePage.title.verifyElementIsDisplayed();
    });

    it('verify autocomplete is displayed', () => {
      // Data provider pattern
      products.forEach((item) => {
        autocompletePage.inputField.type(item);
        autocompletePage.autoComplete.verifyElementIsDisplayed();
      });
    });
  });

  describe('Select item with autocomplete', () => {
    const second = 1;
    const letter = 'a';

    before(() => {
      autocompletePage.inputField.type(letter);
      autocompletePage.autoComplete.selectItemByIndex(second);
    });

    it('verify selected item is displayed in input field', () => {
      const expectedResult = 'Avacado';
      autocompletePage.inputField.verifyInputValueIsCorrect(expectedResult);
    });
  });

  describe('Add a product', () => {
    const text = 'some text';

    before(() => {
      // Fluent/ chain of invocation pattern
      autocompletePage.fillInputField(text).clearInputField().fillInputField(text).clickSubmit();
    });

    it('verify autocomplete is not displayed', () => {
      autocompletePage.autoComplete.verifyElementIsNotExist();
    });
  });
});
