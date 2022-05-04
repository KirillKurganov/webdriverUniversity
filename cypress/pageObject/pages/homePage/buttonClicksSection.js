import { Section } from '../../controls';
import { Label } from '../../controls';
import { Link } from '../../controls';

export class ButtonClicksSection extends Section {
  constructor(selector) {
    super(selector);
    this.titleSelector = '#button-clicks h1';
    this.buttonClicksLinkSelector = 'a#button-clicks';
  }

  get title() {
    return new Label(this.titleSelector);
  }

  get buttonClicksLink() {
    return new Link(this.buttonClicksLinkSelector);
  }
}
