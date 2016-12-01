'use strict';

let peoples = [];
class Person {
    add(person) {
        peoples.push(person);
    }
    list() {
        return peoples;
    }
}
////////////////////
const mocha = require('mocha');
const assert = require('assert');
const People = new Person();
describe('testing Person class', () => {
    beforeEach(() => {
        People.add('Erick2');
    });
    describe('#add', () => {
        it('adding person to list', () => {
            People.add('Erick');
            let results = People.list();
            assert.equal(results.length, 2);
        });
    });

    describe('#list', () => {
        it('testing if contains elements', () => {
            let results = People.list();
            assert.ok(results.length > 0);
        });
    })
});