import { Ng2RecipeBookPage } from './app.po';

describe('ng2-recipe-book App', () => {
  let page: Ng2RecipeBookPage;

  beforeEach(() => {
    page = new Ng2RecipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
