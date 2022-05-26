import { BasePage } from '../../base';
import { ROUTES } from '../../../data';
import { Autocomplete, Button, Input, Label } from '../../controls';

export class AutocompletePage extends BasePage {
  constructor(route = ROUTES.AutocompletePage) {
    super(route);
    this.submitButtonSelector = '#submit-button';
    this.inputFieldSelector = '#myInput';
    this.autoCompleteSelector = '#myInputautocomplete-list';
    this.titleSelector = 'h2';
  }

  get submitButton() {
    return new Button(this.submitButtonSelector);
  }

  get inputField() {
    return new Input(this.inputFieldSelector);
  }

  get autoComplete() {
    return new Autocomplete(this.autoCompleteSelector);
  }

  get title() {
    return new Label(this.titleSelector);
  }

  // Fluent/ chain of invocation pattern
  fillInputField(text) {
    this.inputField.type(text);
    return this;
  }

  // Fluent/ chain of invocation pattern
  clearInputField() {
    this.inputField.clear();
    return this;
  }

  // Fluent/ chain of invocation pattern
  clickSubmit() {
    this.submitButton.click();
    return this;
  }
}
