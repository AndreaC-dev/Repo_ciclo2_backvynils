import { AppPage } from './bands.po';
import { browser, by, element, logging } from 'protractor';

describe('HU03 Band-list', () => {
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

  it('should have name', () => {
    expect(element(by.id('bandName 101')).getText()).toEqual('Queen');
  });

  it('should have image', () => {
    expect(element(by.css('img-fluid')));
  });

  it('should be number of bands', () => {
    let list = element.all(by.id('cards'));
    let num= list.count()
    expect(list.count()).toBe(num);
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
function startTestServer() {
  throw new Error('Function not implemented.');
}

