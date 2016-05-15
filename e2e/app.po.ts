export class TkoNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tko-ng2-app h1')).getText();
  }
}
