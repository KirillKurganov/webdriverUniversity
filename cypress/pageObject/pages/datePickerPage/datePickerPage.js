import { BasePage } from '../../base';
import { ROUTES } from '../../../data';
import { DatePicker } from '../../controls';

export class DatePickerPage extends BasePage {
  constructor(route = ROUTES.DatePickerPage) {
    super(route);
    this.datePickerSelector = '#datepicker';
  }

  get datePicker() {
    return new DatePicker(this.datePickerSelector);
  }
}
