import { BasePage } from '../../base';
import { ROUTES } from '../../../data';
import { DropDownsSection } from './dropDownsSection';
import { CheckBoxesSection } from './checkBoxesSection';

export class DropDownsPage extends BasePage {
  constructor(route = ROUTES.DropDownsPage) {
    super(route);
    this.dropDownsSectionSelector = '#main-header+div div.thumbnail';
    this.checkBoxesSectionSelector = '#main-header~div:nth-of-type(3) div.thumbnail';
  }

  get dropDownsSection() {
    return new DropDownsSection(this.dropDownsSectionSelector);
  }

  get checkBoxesSection() {
    return new CheckBoxesSection(this.checkBoxesSectionSelector);
  }
}
