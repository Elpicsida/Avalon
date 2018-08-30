import { AvalonClientPage } from './app.po';

describe('avalon-client App', () => {
  let page: AvalonClientPage;

  beforeEach(() => {
    page = new AvalonClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
