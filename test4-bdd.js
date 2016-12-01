'use strict';
class ATM {
  
  constructor() {
    this.money = 500;
  }

  getMoney () {
    return this.money;
  }
}

const should = require('should');
const atm = new ATM();
describe('Feature: get cash from an ATM:', function() {
  context('Scenario: success', function() {
    describe('When the user asks the ATM for 500', function($cash) {
      it('Then the ATM will have $cash', function() {
        atm.getMoney().should.equal(500);
      });

    });
  });
});