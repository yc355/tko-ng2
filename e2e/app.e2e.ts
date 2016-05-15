import { TkoNg2Page } from './app.po';

describe('tko-ng2 App', function() {
  let page: TkoNg2Page;

  beforeEach(() => {
    page = new TkoNg2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tko-ng2 works!');
  });
});
