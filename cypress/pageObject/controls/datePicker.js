import { BaseElement } from '../base';
import { Input } from './input';
import { Button } from './button';

export class DatePicker extends BaseElement {
  constructor(selector, selectBoxSelector = '.datepicker-dropdown') {
    super(selector);
    this.inputFieldSelector = `${this.selector} input`;
    this.selectBoxSelector = selectBoxSelector;
    this.nextMonthButtonSelector = `${this.selectBoxSelector} .datepicker-days th.next`;
    this.previousMonthButtonSelector = `${this.selectBoxSelector} .datepicker-days th.prev`;
    this.yearSelector = `${this.selectBoxSelector} .datepicker-years tbody span`;
    this.monthSelector = `${this.selectBoxSelector} .datepicker-months tbody span`;
    this.daySelector = `${this.selectBoxSelector} .datepicker-days tbody td`;
    this.toggleSelector = `${this.selectBoxSelector} .datepicker-days th.datepicker-switch`;
  }

  get inputField() {
    return new Input(this.inputFieldSelector);
  }

  get nextButton() {
    return new Button(this.nextMonthButtonSelector);
  }

  get previousButton() {
    return new Button(this.previousMonthButtonSelector);
  }

  openCalendar(options = {}) {
    cy.get(this.inputFieldSelector).click(options);
  }

  clickToggle(options = {}) {
    cy.get(this.toggleSelector).click(options);
  }

  selectFullDate(date) {
    cy.get(this.yearSelector).contains(date.year).click({ force: true });
    cy.get(this.monthSelector).contains(date.month).click({ force: true });
    cy.get(this.daySelector).contains(date.day).click({ force: true });
  }
}
