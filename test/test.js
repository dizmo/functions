'use strict';
var expect = require('chai').expect;
let index = require('../dist/index.js');

describe('index', () => {
    it('should exist', () => {
        expect(index).to.exist;
    });
    it('should not export a default', () => {
        expect(index.default).to.not.exist;
    });
});

describe('index.buffered', () => {
    it('should exist', () => {
        expect(index.buffered).to.exist;
    });
    it('should be a function', () => {
        expect(index.buffered).to.be.a('function');
    });
});

describe('index.random', () => {
    it('should exist', () => {
        expect(index.random).to.exist;
        expect(String.random).to.exist;
    });
    it('should be a function', () => {
        expect(index.random).to.be.a('function');
        expect(String.random).to.be.a('function');
    });
});
