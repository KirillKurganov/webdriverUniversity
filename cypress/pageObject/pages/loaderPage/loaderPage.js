import { BasePage } from '../../base';
import { Spinner } from '../../controls';
import { ROUTES } from '../../../data';
import { Button } from '../../controls';

export class LoaderPage extends BasePage {
  constructor(route = ROUTES.LoaderPage) {
    super(route);
    this.spinnerSelector = '#loader';
    this.clickMeButtonSelector = 'span#button1 p';
  }

  get spinner() {
    return new Spinner(this.spinnerSelector);
  }

  get clickMeButton() {
    return new Button(this.clickMeButtonSelector);
  }
}
