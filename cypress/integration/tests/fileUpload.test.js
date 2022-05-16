import path from 'path';
import { FileUploadPage } from '../../pageObject/pages';

describe.skip('Upload file test', () => {
  let fileUploadPage;

  describe('Open the "Upload file" page', () => {
    before(() => {
      fileUploadPage = new FileUploadPage();
      fileUploadPage.navigateTo();
    });

    it('verify "Choose file" button is displayed', () => {
      fileUploadPage.chooseFileInput.verifyElementIsDisplayed();
    });
  });

  describe('Upload the file', () => {
    const rootDir = Cypress.env('PWD');
    const fileName = 'uploadFile.txt';
    const pathToFile = [rootDir, 'cypress', 'data', 'filesForUploading', fileName];

    before(() => {
      let fileToUpload = path.join(...pathToFile);
      fileUploadPage.chooseFileInput.uploadFile(fileToUpload);
    });

    it('verify file value is displayed', () => {
      const expectedResult = 'C:\\fakepath\\uploadFile.txt';
      fileUploadPage.chooseFileInput.verifyInputValueIsCorrect(expectedResult);
    });
  });

  describe('Click the "Submit" button', () => {
    const expectedResult = 'Your file has now been uploaded!';

    before(() => {
      cy.on('window:alert', (text) => {
        expect(text).to.equal(expectedResult);
      });
      fileUploadPage.submitButton.click();
    });

    it('verify the file value is empty', () => {
      const expectedResult = '';
      fileUploadPage.chooseFileInput.verifyInputValueIsCorrect(expectedResult);
    });
  });
});
