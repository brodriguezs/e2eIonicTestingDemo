import { browser, element, by, ElementFinder } from 'protractor';
 
describe('Example E2E Test', () => {
 
  beforeEach(() => {
    browser.get('');
  });
 
  it('first page with the home tittle', () => {
    browser.driver.sleep(1000);
    expect(element(by.css('ion-header ion-navbar ion-title')) // Grab the title of the selected page
    	.getAttribute('innerHTML')) // Get the text content
      .toContain('Home'); // Check if it contains the text "Home"
  });
 
  it('the user can browse to the list page', () => {
    browser.driver.sleep(1000);
    // Click the 'About' tab
    element(by.css('.togglex-menu')).click().then(() => {
      // Wait for the page transition
      browser.driver.sleep(1000);
//			expect<any>(element.all(by.tagName('button')).count()).toEqual(2);
      element.all(by.tagName('button')).get(1).click().then(() => {
        browser.driver.sleep(1000);
        expect(element(by.css('ion-header ion-navbar ion-title')) // Grab the title of the selected page
          .getAttribute('innerHTML')) // Get the text content
          .toContain('List'); // Check if it contains the title "List"
      });
    });
  });

});
