import { MerdaPage } from './app.po';

describe('merda App', function() {
  let page: MerdaPage;

  beforeEach(() => {
    page = new MerdaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
