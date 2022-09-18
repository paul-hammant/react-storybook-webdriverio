const assert = require('assert');

describe('incr-decr component', () => {
    beforeEach(() => {
        browser.url('http://localhost:64791/iframe.html?id=app--with-text&viewMode=story');
    });

    it('should increase and decrease values by 1', () => {
        let message = $('.message-output');
        expect(message.getText()).toBe('Current value: 0');
        $('#btnIncrement').click();
        expect(message.getText()).toBe('Current value: 1');
        let btnDecrement = $('#btnDecrement');
        btnDecrement.click()
        btnDecrement.click()
        expect(message.getText()).toBe('Current value: -1');
    });
});