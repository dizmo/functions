"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var index_1 = require("../lib/index");
var index_2 = require("../lib/index");
describe("index.buffered", function () {
    it("should exist", function () {
        chai_1.expect(index_1.buffered).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(index_1.buffered).to.be.a("function");
    });
});
describe("index.random", function () {
    it("should exist", function () {
        chai_1.expect(index_2.random).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(index_2.random).to.be.a("function");
    });
});
describe("String.random", function () {
    it("should exist", function () {
        chai_1.expect(String.random).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(String.random).to.be.a("function");
    });
});
describe("index.UUID", function () {
    it("should be a string", function () {
        chai_1.expect("00000000-0000-0000-0000-000000000000").to.be.a("string");
    });
});
//# sourceMappingURL=test.js.map