
import test from 'ava'
import diacritice from './index'


test('should fail for empty texts', async t=> {
    await t.throws(diacritice(''), /"text" is invalid/)
});
test('should success for short text', async t=> {
    const result = await diacritice('Acasa')
    t.is(result.text, 'Acasă')
});
