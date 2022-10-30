import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitle(): Promise<string> {
    return element(by.css('app-coleccionista-listar h1')).getText() as Promise<string>;
  }

  getButton() {
    return element(by.css('[routerlink="/collectors/list"]'));
  }

  getMoreDetButton() {
    return element(by.id('linkMore 100'));
  }

  getCollectorPriceAlbum() {
    return element(by.id('collector_price_album 35'));
  }

  getCollectorAlbumStatus() {
    return element(by.id('collector_album_status Active'));
  }
  getCollectorsForm() {
    return element(by.id('collectors'));
  }
  getAddCollectorsButton() {
    return element(by.id('add-collectors'));
  }

  getAddPerformerTitle() {
    return element(by.id('add-performer-title'));
  }
}
