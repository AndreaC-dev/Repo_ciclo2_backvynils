import { AppPage } from './bands.po';
import { browser, by, element, logging } from 'protractor';

describe('HU14 Add musician to band', () => {
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
  it('should have musicians in Details', () => {
    expect(page.getMusic().isPresent()).toBe(true);
  });
  it('should have Musician form in Details', () => {
    expect(page.getMusicForm().isPresent()).toBe(true);
  });
  it('should show all musicians', () => {
    page.getMusicForm().click().then(function () {
    expect(page.getMusicList().isPresent()).toBe(true);
  })
});
it('should show select musician', () => {
  page.getMusicForm().click();
  page.getMusicList().click().then(function () {
    expect(element(by.css('.ng-dirty')).isPresent()).toBe(true);
})
});
it('should show add musician', () => {
page.getMusicForm().click();
let names = element.all(by.css('option'));
names.first().getText().then(value => {
  element(by.cssContainingText('option',value)).click().then(function () {
    page.getAddMusic().click().then(function () {
      expect(element(by.cssContainingText('.toast-container','The musician was added successfully')).isPresent()).toBe(true);  
      expect(element(by.id('detail')).isPresent()).toBe(true);
      expect(element(by.cssContainingText('dd',value)).isPresent()).toBe(true);  
})})})});

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

