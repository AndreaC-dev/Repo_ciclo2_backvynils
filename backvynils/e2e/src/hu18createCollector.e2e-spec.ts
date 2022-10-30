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

  it('should have add Collectors button', () => {
    page.getAddCollectorsButton().click();
  });

  it('should have Collectors form in Details', () => {
    expect(page.getCollectorsForm().isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
