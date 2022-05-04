import { Section } from '../../controls';
import { Label } from '../../controls';
import { Link } from '../../controls';

export class ContactUsSection extends Section {
  constructor(selector) {
    super(selector);
    this.titleSelector = '#contact-us h1';
    this.contactUsLinkSelector = 'a#contact-us';
  }

  get title() {
    return new Label(this.titleSelector);
  }

  get contactUsLink() {
    return new Link(this.contactUsLinkSelector);
  }
}
