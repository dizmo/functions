'use strict';
var expect = require('chai').expect;
let index = require('../dist/index.js');

describe('library tests', () => {
    it('should reexport buffered', () => {
        expect(index.buffered).to.exist;
    });
});
