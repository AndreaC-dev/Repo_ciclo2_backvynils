import { AppPage } from './bands.po';
import { browser, by, element, logging } from 'protractor';
const faker = require('faker');

describe('HU17 Band-create', () => {
  let page: AppPage;
  let name = faker.lorem.word();
  let image = faker.image.image();
  let description = faker.lorem.sentence();
  let date = faker.date.past().toLocaleString();

  beforeEach(() => {
    page = new AppPage();
});

  it('should display Bands Button', () => {
    page.navigateTo();
    expect(page.getButton().getText()).toEqual('Bands');
  });
  
  it('should have title Bands', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getTitle()).toEqual('Bands');    
  });

  it('should have button add', () => {
    expect(page.getButtonAdd().getText()).toEqual('Add Bands');
  });

  it('should show form', () => {
    page.getButtonAdd().click().then(function () {
      expect(element(by.id('form')).isPresent()).toBe(true);
    });
  });
  it('should show name in Form', () => {
    expect(page.getName().isPresent()).toBe(true);
  });
  it('should show image in Form', () => {
    expect(page.getImage().isPresent()).toBe(true);
  });
  it('should show description in Form', () => {
    expect(page.getDescrip().isPresent()).toBe(true);
  });
  it('should show creation date in Form', () => {
    expect(page.getCreDate().isPresent()).toBe(true);
  });
  it('should show alert name required', () => {
    page.getName().click();
    page.getImage().click().then(function () {
      expect(element(by.cssContainingText('.alert','Name required')).isPresent()).toBe(true);
    });
  });
  it('should show alert name short', () => {
    page.getName().click();
    page.getName().sendKeys('a').then(function () {
      expect(element(by.cssContainingText('.alert','Name too short. Please include more than 2 letters.')).isPresent()).toBe(true);
    });
  });
  it('should show alert image required', () => {
    expect(element(by.cssContainingText('.alert','Image required')).isPresent()).toBe(true);
    });
  it('should show alert valid image', () => {
    page.getImage().click();
    page.getImage().sendKeys('a').then(function () {
      expect(element(by.cssContainingText('.alert','Please include a valid url')).isPresent()).toBe(true);
    });
  });
  it('should show alert description required', () => {
    page.getDescrip().click();
    page.getCreDate().click().then(function () {
      expect(element(by.cssContainingText('.alert','Description required')).isPresent()).toBe(true);
    });
  });
  it('should show alert description short', () => {
    page.getDescrip().click();
    page.getDescrip().sendKeys('a').then(function () {
      expect(element(by.cssContainingText('.alert','Description too short. Please include more than 10 letters.')).isPresent()).toBe(true);
    });
  });
  it('should show alert date required', () => {
    expect(element(by.cssContainingText('.alert','Creation date required')).isPresent()).toBe(true);
    });
  it('should have disabled button', () => {
    expect(page.getCreate().isEnabled()).toBe(false);
    });
  it('should enable button when information is complete', () => {
    page.getName().clear();
    page.getName().sendKeys(name);
    page.getDescrip().clear();
    page.getDescrip().sendKeys(description);
    page.getImage().clear();
    page.getImage().sendKeys(image);
    page.getCreDate().sendKeys(date).then(function(){
      expect(page.getCreate().isEnabled()).toBe(true);
    })
    });
  it('should create a band', () => {
    page.getCreate().click().then(function(){
      expect(element(by.cssContainingText('.toast-container','Sucessfully created!')).isPresent()).toBe(true);
      expect(element(by.id('list')).isPresent()).toBe(true);
    })
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

