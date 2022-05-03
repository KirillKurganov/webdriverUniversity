import { BasePage } from '../base';
import { ContactUsSection } from './contactUsSection';

export class HomePage extends BasePage {

  constructor(route = '') {
    super(route);
    this.contactUsSectionSelector = '#contact-us .thumbnail';
  }

  get contactUsSection() {
    return new ContactUsSection(this.contactUsSectionSelector);
  }
}