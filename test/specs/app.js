const assert = require('assert');

describe('webdriver.io page', () => {
    beforeEach(() => {
        browser.url('http://localhost:8080/');
    });

    it('should have the right title', () => {
        const title = browser.getTitle();
        assert.strictEqual(title, 'React-Storybook-WebdriverIO');
        // browser.pause(2000);
    });

    it('should increase the value by 1', () => { 
        $('#btnIncrement').click();
        const newValue = $('.message-output').getText();
        console.log('TEST  value::  ', newValue);
        assert.equal(newValue, 'Value: 1');
    });
});