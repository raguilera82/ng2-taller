import { Ng2TallerPage } from './app.po';

describe('ng2-taller App', function() {
  let page: Ng2TallerPage;

  beforeEach(() => {
    page = new Ng2TallerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
