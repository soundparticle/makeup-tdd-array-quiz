const assert = require('assert');
const { filter } = require('../lib/array');
describe('array method', () => {

    describe('filter words', () => {
        it('removes words that contain y or Y', () => {
            const words = ['sky', 'hot', 'Yeti', 'green'];
            
            const newArr = filter(words);
            assert.deepEqual(newArr, ['Is it hot? Is it green?']);

        });    
    });
});