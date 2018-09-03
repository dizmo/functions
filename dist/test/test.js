"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var lib_1 = require("../lib");
var lib_2 = require("../lib");
var lib_3 = require("../lib");
var lib_4 = require("../lib");
var lib_5 = require("../lib");
require("mocha");
describe("after", function () {
    it("should exist", function () {
        chai_1.expect(lib_1.after).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_1.after).to.be.a("function");
    });
    it("should have a decorator", function () {
        chai_1.expect(lib_1.after.decorator).to.be.a("function");
    });
});
describe("before", function () {
    it("should exist", function () {
        chai_1.expect(lib_2.before).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_2.before).to.be.a("function");
    });
    it("should have a decorator", function () {
        chai_1.expect(lib_2.before.decorator).to.be.a("function");
    });
});
describe("buffered", function () {
    it("should exist", function () {
        chai_1.expect(lib_3.buffered).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_3.buffered).to.be.a("function");
    });
    it("should have a decorator", function () {
        chai_1.expect(lib_3.buffered.decorator).to.be.a("function");
    });
});
describe("partial", function () {
    it("should exist", function () {
        chai_1.expect(lib_4.partial).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_4.partial).to.be.a("function");
    });
});
describe("random", function () {
    it("should exist", function () {
        chai_1.expect(lib_5.random).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_5.random).to.be.a("function");
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
describe("UUID", function () {
    it("should be a string", function () {
        chai_1.expect("00000000-0000-0000-0000-000000000000").to.be.a("string");
    });
});
//# sourceMappingURL=test.js.map