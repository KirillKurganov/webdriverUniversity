import { BasePage } from '../../base';
import { ROUTES } from '../../../data';
import { Input } from '../../controls';
import { Button } from '../../controls';

export class FileUploadPage extends BasePage {
  constructor(route = ROUTES.FileUploadPage) {
    super(route);
    this.chooseFileInputSelector = 'input#myFile';
    this.submitButtonSelector = '#submit-button';
  }

  get chooseFileInput() {
    return new Input(this.chooseFileInputSelector);
  }

  get submitButton() {
    return new Button(this.submitButtonSelector);
  }
}
