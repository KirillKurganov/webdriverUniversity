import { Section } from '../../controls';
import { Label } from '../../controls';
import { Link } from '../../controls';

export class ToDoListSection extends Section {
  constructor(selector) {
    super(selector);
    this.titleSelector = `${this.selector} h1`;
    this.toDoListLinkSelector = 'a#to-do-list';
  }

  get title() {
    return new Label(this.titleSelector);
  }

  get toDoListLink() {
    return new Link(this.toDoListLinkSelector);
  }
}
