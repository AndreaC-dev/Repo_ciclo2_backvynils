import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitle(): Promise<string> {
    return element(by.css('app-band-list h1')).getText() as Promise<string>;
  }
  getButton() {
    return element(by.css('[routerlink="/bands/list"]'));
  }
  getMoreDetButton() {
    return element(by.id('linkMore 101'));
  }
  getLessDetButton() {
    return element(by.id('linkLess'));
  }
  getNameDetails() {
    return element(by.css('app-band-detail h2'));
  }
  getDescrip() {
    return element(by.id('description'));
  }
  getDate() {
    return element(by.id('date'));
  }
  getMusic() {
    return element(by.id('music'));
  }
  getPriz() {
    return element(by.id('priz'));
  }
  getButtonAdd() {
    return element(by.css('[routerlink="/bands/create"]'));
  }
  getName() {
    return element(by.id('name'));
  }
  getImage() {
    return element(by.id('image'));
  }
  getCreDate() {
    return element(by.id('creationDate'));
  }
  getAlert() {
    return element(by.id('alert alert-danger alert-dismissible fade show'));
  }
  getCreate() {
    return element(by.cssContainingText('.btn','Create'));
  }
  getMusicForm() {
    return element(by.id('musicians'));
  }
  getMusicList() {
    return element(by.css('option'));
  }
  getAddMusic() {
    return element(by.id('add-musicians'));
  }
}