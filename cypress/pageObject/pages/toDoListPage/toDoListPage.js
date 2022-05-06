import { BasePage } from '../../base';
import { Label } from '../../controls';
import { Input } from '../../controls';
import { ToDoList } from './toDoList';
import { ROUTES } from '../../../data';

export class ToDoListPage extends BasePage {
  constructor(route = ROUTES.ToDoListPage) {
    super(route);
    this.toDoListTitleSelector = 'div h1';
    this.toDoListInputSelector = '#container input';
    this.toDoListSelector = '#container ul';
  }

  get toDoListTitle() {
    return new Label(this.toDoListTitleSelector);
  }

  get toDoListInput() {
    return new Input(this.toDoListInputSelector);
  }

  get toDoList() {
    return new ToDoList(this.toDoListSelector);
  }

  addItem(title) {
    this.toDoListInput.typeAndClickEnter(title);
  }
}
