import { buffered } from '../lib/index';
import { random } from '../lib/index';
import { UUID } from '../lib/index';
import { expect } from 'chai';
import 'mocha';

describe('index.buffered', () => {
    it('should exist', () => {
        expect(buffered).to.exist;
    });
    it('should be a function', () => {
        expect(buffered).to.be.a('function');
    });
});
describe('index.random', () => {
    it('should exist', () => {
        expect(random).to.exist;
    });
    it('should be a function', () => {
        expect(random).to.be.a('function');
    });
});
describe('String.random', () => {
    it('should exist', () => {
        expect(String.random).to.exist;
    });
    it('should be a function', () => {
        expect(String.random).to.be.a('function');
    });
});
describe('index.UUID', () => {
    it('should be a string', () => {
        expect('00000000-0000-0000-0000-000000000000' as UUID).to.be.a('string');
    });
});
