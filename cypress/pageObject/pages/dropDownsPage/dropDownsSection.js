import { Section } from '../../controls';
import { Select } from '../../controls';

export class DropDownsSection extends Section {
  constructor(selector) {
    super(selector);
    this.topSelectSelector = '#dropdowm-menu-1';
    this.middleSelectSelector = '#dropdowm-menu-2';
    this.bottomSelectSelector = '#dropdowm-menu-3';
  }

  get topSelect() {
    return new Select(this.topSelectSelector);
  }

  get middleSelect() {
    return new Select(this.middleSelectSelector);
  }

  get bottomSelect() {
    return new Select(this.bottomSelectSelector);
  }
}
