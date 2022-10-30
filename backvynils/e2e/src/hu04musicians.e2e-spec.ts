import { AppPage } from './musicians.po';
import { browser, by, element, logging } from 'protractor';

describe('HU04 Musician-detail', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage()
});

  it('should display Musicians Button', () => {
    page.navigateTo();
    expect(page.getButton().getText()).toEqual('Musicians')    ;
  });

  it('should have title Musicians', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getTitle()).toEqual('Musicians');    
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
    expect(page.getNameDetails().getText()).toEqual('Rubén Blades Bellido de Luna');
  });
  it('should have description in Details', () => {
    expect(page.getDescrip().isPresent()).toBe(true);
  });
  it('should have creation date in Details', () => {
    expect(page.getDate().isPresent()).toBe(true);
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

