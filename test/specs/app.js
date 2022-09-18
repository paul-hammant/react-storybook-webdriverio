const assert = require('assert');

describe('webdriver.io page', () => {
    beforeEach(() => {
        browser.url('http://localhost:64308/iframe.html?id=app--with-text&viewMode=story');
    });

    it('should increase and decrease values by 1', () => {
        expect($('.message-output').getText()).toBe('Current value: 0');
        $('#btnIncrement').click();
        expect($('.message-output').getText()).toBe('Current value: 1');
        $('#btnDecrement').click()
        $('#btnDecrement').click()
        expect($('.message-output').getText()).toBe('Current value: -1');
    });
});