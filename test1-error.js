'use strict';

class Math {
    sum(oneNumber, anotherNumber) {
        return oneNumber + anotherNumber;
    }
}

////////////////////////
const mocha = require('mocha');
const assert = require('assert');
const math = new Math();

describe('Testing Math class', () => {
    describe('#sum', () => {
        it('testing sum method with two numbers', () => {
            const result = math.sum(1, '2');
            assert.equal(result, 3);     
        });
    })
});