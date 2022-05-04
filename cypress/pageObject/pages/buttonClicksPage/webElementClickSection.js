import { Section } from '../../controls';
import { Button } from '../../controls';

export class WebElementClickSection extends Section {
  constructor(selector) {
    super(selector);
    this.clickMeButtonSelector = `${this.selector} span`;
  }

  get clickMeButton() {
    return new Button(this.clickMeButtonSelector);
  }
}
