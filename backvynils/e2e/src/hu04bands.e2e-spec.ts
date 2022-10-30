import { AppPage } from './bands.po';
import { browser, by, element, logging } from 'protractor';

describe('HU04 Band-detail', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage()
});

  it('should display Bands Button', () => {
    page.navigateTo();
    expect(page.getButton().getText()).toEqual('Bands')    ;
  });
  
  it('should have title Bands', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getTitle()).toEqual('Bands');    
  });
  it('should show details', () => {
    page.getMoreDetButton().click().then(function () {
      expect(element(by.id('detail')).isPresent()).toBe(true);
    });
  });
  it('should have a Less details button', () => {
    expect(page.getLessDetButton().getText()).toEqual("Less details ▲");
  });

  it('should show name in Details', () => {
    expect(page.getNameDetails().getText()).toEqual('Queen');
  });
  it('should have description in Details', () => {
    expect(page.getDescrip().isPresent()).toBe(true);
  });
  it('should have creation date in Details', () => {
    expect(page.getDate().isPresent()).toBe(true);
  });
  it('should have musicians in Details', () => {
    expect(page.getMusic().isPresent()).toBe(true);
  });
  it('should have prizes in Details', () => {
    expect(page.getPriz().isPresent()).toBe(true);
  });
  it('should Less details button works', () => {
    page.getLessDetButton().click().then(function () {
      expect(element(by.id('detail')).isPresent()).toBe(false);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
function startTestServer() {
  throw new Error('Function not implemented.');
}

