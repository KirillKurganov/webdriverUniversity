import { HomePage } from '../../pageObject/pages';
import { ToDoListPage } from '../../pageObject/pages';

describe('To-Do list test', () => {
  let homePage;
  let toDoListPage;

  describe('Open the home page', () => {
    before(() => {
      homePage = new HomePage();
      homePage.navigateTo();
      homePage.toDoListSection.scrollToElement();
    });

    it('verify the "To-Do list" section title is displayed', () => {
      homePage.toDoListSection.title.verifyElementIsVisible();
    });
  });

  describe('Open the "To-Do list" page', () => {
    before(() => {
      homePage.toDoListSection.toDoListLink.verifyLinkIsOpenedInNewTabAndNavigate();
      toDoListPage = new ToDoListPage();
    });

    it('verify "To-Do list" page is displayed', () => {
      toDoListPage.toDoListTitle.verifyElementIsVisible();
    });

    it('verify three items are displayed in To-Do list', () => {
      const expectedResult = 3;
      toDoListPage.toDoList.verifyNumberOfItemsIsCorrect(expectedResult);
    });
  });

  describe('Add new item to To-Do list', () => {
    const newItem = 'new Item';

    before(() => {
      toDoListPage.addItem(newItem);
    });

    it('verify new item is added to To-Do list', () => {
      const expectedResult = 4;
      toDoListPage.toDoList.verifyNumberOfItemsIsCorrect(expectedResult);
    });

    it('verify new item is displayed', () => {
      const index = 3;
      const expectedResult = 'new Item';
      toDoListPage.toDoList.verifyItemTextByIndex(index, expectedResult);
    });
  });

  describe('Remove new item', () => {
    const fourth = 3;

    before(() => {
      toDoListPage.toDoList.removeItemByIndex(fourth);
    });

    it('verify element is removed', () => {
      const expectedResult = 3;
      toDoListPage.toDoList.verifyNumberOfItemsIsCorrect(expectedResult);
    });
  });
});
