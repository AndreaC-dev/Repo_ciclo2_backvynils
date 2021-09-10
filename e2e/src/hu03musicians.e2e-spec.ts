import { AppPage } from './musicians.po';
import { browser, by, element, logging } from 'protractor';

describe('HU03 Musician-list', () => {
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

  it('should have name', () => {
    expect(element(by.id('musicianName 100')).getText()).toEqual('Rubén Blades Bellido de Luna');
  });
  it('should have image', () => {
    expect(element(by.css('img-fluid')));
  });

  it('should be number of musicians', () => {
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

