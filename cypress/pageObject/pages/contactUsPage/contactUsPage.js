import { BasePage } from '../../base';
import { Input } from '../../controls';
import { Button } from '../../controls';
import { ROUTES } from '../../../data';

export class ContactUsPage extends BasePage {
  constructor(route = ROUTES.ContactUsPage) {
    super(route);
    this.firstNameFieldSelector = '#contact_form [name="first_name"]';
    this.lastNameFieldSelector = '[name="first_name"]+input';
    this.emailAddressFieldSelector = '[name="first_name"]~input:last-of-type';
    this.commentsFieldSelector = '#contact_form textarea';
    this.resetButtonSelector = '#form_buttons input:first-of-type';
    this.submitButtonSelector = '#form_buttons input:last-of-type';
  }

  get firstNameField() {
    return new Input(this.firstNameFieldSelector);
  }

  get lastNameField() {
    return new Input(this.lastNameFieldSelector);
  }

  get emailAddressField() {
    return new Input(this.emailAddressFieldSelector);
  }

  get commentsField() {
    return new Input(this.commentsFieldSelector);
  }

  get resetButton() {
    return new Button(this.resetButtonSelector);
  }

  get submitButton() {
    return new Button(this.submitButtonSelector);
  }
}
