
var diacritice = require('../lib');
var assert = require('assert');

describe('diacritice', function () {
    it('should fail for no text', function () {
        return diacritice().then(data => assert.ok(null), e => assert.ok(e));
    });
    it('should success for short text', function () {
        return diacritice('Acasa')
            .then(data => {
                assert.ok(data);
                assert.equal('Acasă', data.text);
            });
    });
});
