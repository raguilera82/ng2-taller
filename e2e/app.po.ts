import { browser, element, by } from 'protractor';

export class Ng2TallerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  setUsername(username: string) {
    element(by.css('#username')).sendKeys(username);
  }

  getButtonSearch() {
    return element(by.css('#search'));
  }

  getLogin() {
    return element(by.css('#login'));
  }

  getError() {
    return element(by.css('#error'));
  }
}
