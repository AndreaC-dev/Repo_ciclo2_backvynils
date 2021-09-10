import { AppPage } from './collectors.po';
import { browser, by, element, logging } from 'protractor';

describe('HU05 Collector-list', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Collectors Button', () => {
    page.navigateTo();
    expect(page.getButton().getText()).toEqual('Collectors')    ;
  });


  it('should have title Collectors', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getTitle()).toEqual('Collectors');
  });

  it('should have name', () => {
    expect(element(by.id('collectorName 100')).getText()).toEqual('Manolo Bellon');
  });

  it('should have a More details button', () => {
    expect(page.getMoreDetButton().getText()).toEqual("More details ▼");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
