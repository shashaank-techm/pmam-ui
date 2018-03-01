import { PmamPage } from './app.po';

describe('pmam App', () => {
  let page: PmamPage;

  beforeEach(() => {
    page = new PmamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
