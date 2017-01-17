import { VidifyPage } from './app.po';

describe('vidify App', function() {
  let page: VidifyPage;

  beforeEach(() => {
    page = new VidifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
