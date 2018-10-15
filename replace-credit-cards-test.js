'use strict';
const expect = require('chai').expect;
const replaceCreditCards = require('./replace-credit-cards')

// test if replace-credit-cards.js exists 
describe('replaceCreditCards', function() {
  it('should exist', function() {
      expect(replaceCreditCards).to.not.be.undefined;
  });
});

// test if one credit card number is replaced with - 
describe('my card number is 1111-1111-1111-1111', function() {
  it('should be: my card number is - ', function() {
      const message = 'my card number is 1111-1111-1111-1111';
      expect(replaceCreditCards(message)).to.equal('my card number is - ');
  });
});

// test if one credit card number without spaces is replaced with - 
describe('my card number is 1111111111111111', function() {
  it('should be: my card number is - ', function() {
      const message = 'my card number is 1111111111111111';
      expect(replaceCreditCards(message)).to.equal('my card number is - ');
  });
});

// test if one credit card number with spaces is replaced with - 
describe('my card number is 1111 1111 1111 1111', function() {
  it('should be: my card number is - ', function() {
      const message = 'my card number is 1111 1111 1111 1111';
      expect(replaceCreditCards(message)).to.equal('my card number is - ');
  });
});

// test if phone numbe is NOT replaced with - 
describe('my phone number is 111-111-1111', function() {
  it('should be: my phone number is 111-111-1111', function() {
      const message = 'my phone number is 111-111-1111';
      expect(replaceCreditCards(message)).to.equal('my phone number is 111-111-1111');
  });
});

// test if multiple credit card numbers are replaced with -
describe('my card numbers are 1111-1111-1111-1111 and 2222-22222-2222-2222', function() {
  it('should be: my card numbers are - and - ', function() {
      const message = 'my card numbers are 1111-1111-1111-1111 and 2222-2222-2222-2222';
      expect(replaceCreditCards(message)).to.equal('my card numbers are - and - ');
  });
});

// test if only credit card number is replaced with - when credit card number and phone number with spaces exists
describe('my card number is 1111-1111-1111-1111 and my phone number is 222 222 2222', function() {
  it('should be: my card number is - and my phone number is 222 222 2222', function() {
      const message = 'my card number is 1111-1111-1111-1111 and my phone number is 222 222 2222';
      expect(replaceCreditCards(message)).to.equal('my card number is - and my phone number is 222 222 2222');
  });
});