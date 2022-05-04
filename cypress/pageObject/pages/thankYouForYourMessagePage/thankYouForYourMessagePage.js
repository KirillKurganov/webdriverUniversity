import { BasePage } from '../../base';
import { Label } from '../../controls';
import { ROUTES } from '../../../data';

export class ThankYouForYourMessagePage extends BasePage {
  constructor(route = ROUTES.ThankYouForYourMessagePage) {
    super(route);
    this.titleSelector = 'div h1';
  }

  get title() {
    return new Label(this.titleSelector);
  }
}
