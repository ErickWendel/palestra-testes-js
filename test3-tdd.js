'use strict';
let users = []
class User {
    add(user) {
        users.push(user);
        return true;
    }
    list() {
        return users;
    }
}

const mocha = require('mocha');
const assert = require('assert');
const user = new User();
describe('user class tests', () => {
    it('add new user', () => {
        let result = user.add('Erick');
        assert.ok(result);
    });

    it('list users', () => {
        let result = user.list();
        assert.equal(1, result.length);
    })
});