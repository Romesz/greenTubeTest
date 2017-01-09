import { browser, element, by } from 'protractor';

export class GreenTubeTestPage {
  navigateTo() {
    return browser.get('/');
  }

  button = element(by.css('app-form-component button'));
  email = element(by.css('app-form-component #email'));
  pass = element(by.css('app-form-component #pass'));

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  isButtonDisabled(forceDisable) {
    if (forceDisable === false) {
      this.email.clear().sendKeys('firtermaiszter.romano@gmail.com');
      this.pass.clear().sendKeys('dummypass');
    }
    return this.button.getAttribute('disabled');
  }
}
