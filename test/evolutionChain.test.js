// test/evolutionChain.test.js
const assert = require('assert');
const getEvolutionChain = require('../src');

describe('Evolution Chain Test', () => {
    it('should return correct evolution chain for caterpie', async () => {
        const result = await getEvolutionChain('caterpie');
        assert.strictEqual(result.name, 'caterpie');
        assert.strictEqual(result.variations[0].name, 'metapod');
    });
});
