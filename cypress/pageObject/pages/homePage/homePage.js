import { BasePage } from '../../base';
import { ContactUsSection } from './contactUsSection';
import { ButtonClicksSection } from './buttonClicksSection';
import { ROUTES } from '../../../data';

export class HomePage extends BasePage {
  constructor(route = ROUTES.HomePage) {
    super(route);
    this.contactUsSectionSelector = '#contact-us .thumbnail';
    this.buttonClicksSectionSelector = '#button-clicks .thumbnail';
  }

  get contactUsSection() {
    return new ContactUsSection(this.contactUsSectionSelector);
  }

  get buttonClicksSection() {
    return new ButtonClicksSection(this.buttonClicksSectionSelector);
  }
}
