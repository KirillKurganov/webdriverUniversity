import { BasePage } from '../../base';
import { ROUTES } from '../../../data';
import { WebElementClickSection } from './webElementClickSection';
import { JavaScriptClickSection } from './javaScriptClickSection';
import { ActionMoveAndClickSection } from './actionMoveAndClickSection';

export class ButtonClicksPage extends BasePage {
  constructor(route = ROUTES.ButtonClicksPage) {
    super(route);
    this.webElementClickSectionSelector = 'div.row div.col-sm-4:first-of-type';
    this.javaScriptClickSectionSelector = 'div.row div.col-sm-4:nth-of-type(2)';
    this.actionMoveAndClickSectionSelector = 'div.row div.col-sm-4:last-of-type';
  }

  get webElementClickSection() {
    return new WebElementClickSection(this.webElementClickSectionSelector);
  }

  get javaScriptClickSection() {
    return new JavaScriptClickSection(this.javaScriptClickSectionSelector);
  }

  get actionMoveAndClickSection() {
    return new ActionMoveAndClickSection(this.actionMoveAndClickSectionSelector);
  }
}
