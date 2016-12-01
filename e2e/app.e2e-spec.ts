import { Ng2TallerPage } from './app.po';
import { browser } from 'protractor';

describe('ng2-taller App', function() {
  let page: Ng2TallerPage;

  beforeEach(() => {
    page = new Ng2TallerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Search User');
  });

  it('should display login', () => {
    page.navigateTo();
    const USERNAME = 'raguilera82';
    page.setUsername(USERNAME);
    page.getButtonSearch().click();
    expect(page.getLogin().getText()).toContain(USERNAME);
    browser.driver.sleep(5000);
  });

  it('should display error', () => {
    page.navigateTo();
    const USERNAME = 'raguilera82error';
    page.setUsername(USERNAME);
    page.getButtonSearch().click();
    expect(page.getError().isElementPresent).toBeTruthy();
    browser.driver.sleep(5000);
  });

});
