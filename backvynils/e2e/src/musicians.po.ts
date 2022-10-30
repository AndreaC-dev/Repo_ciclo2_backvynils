import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitle(): Promise<string> {
    return element(by.css('app-musician-list h1')).getText() as Promise<string>;
  }
  getButton() {
    return element(by.css('[routerlink="/musicians/list"]'));
  }
  getMoreDetButton() {
    return element(by.id('linkMore 100'));
  }
  getLessDetButton() {
    return element(by.id('linkLess'));
  }
  getNameDetails() {
    return element(by.css('app-musician-detail h2'));
  }
  getDescrip() {
    return element(by.id('description'));
  }
  getDate() {
    return element(by.id('date'));
  }
  getPriz() {
    return element(by.id('priz'));
  }
  getButtonAdd() {
    return element(by.css('[routerlink="/musicians/create"]'));
  }
  getName() {
    return element(by.id('name'));
  }
  getImage() {
    return element(by.id('image'));
  }
  getBirthDate() {
    return element(by.id('birthDate'));
  }
  getAlert() {
    return element(by.id('alert alert-danger alert-dismissible fade show'));
  }
  getCreate() {
    return element(by.cssContainingText('.btn','Create'));
  }



}