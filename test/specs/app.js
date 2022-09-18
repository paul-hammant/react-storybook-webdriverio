const assert = require('assert');

describe('webdriver.io page', () => {
    beforeEach(() => {
        browser.url('http://localhost:63674/iframe.html?id=app--with-text&viewMode=story');
    });

    it('should increase and decrease values by 1', () => {
        assert.equal($('.message-output').getText(), 'Current value: 0');
        $('#btnIncrement').click();
        assert.equal($('.message-output').getText(), 'Current value: 1');
        $('#btnDecrement').click()
        $('#btnDecrement').click()
        assert.equal($('.message-output').getText(), 'Current value: -1');
    });
});