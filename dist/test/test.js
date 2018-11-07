"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var lib_1 = require("../lib");
var lib_2 = require("../lib");
var lib_3 = require("../lib");
var lib_4 = require("../lib");
var lib_5 = require("../lib");
var lib_6 = require("../lib");
var lib_7 = require("../lib");
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
describe("Global", function () {
    it("should allow a `global` declaration", function () {
        chai_1.expect(typeof global === "undefined" ? "undefined" : _typeof(global)).to.not.be.an("undefined");
    });
    it("should allow a `global` as an object", function () {
        chai_1.expect(typeof global === "undefined" ? "undefined" : _typeof(global)).to.eq("object");
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
describe("Function.partial", function () {
    it("should exist", function () {
        chai_1.expect(Function.partial).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(Function.partial).to.be.a("function");
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
describe("trace", function () {
    it("should exist", function () {
        chai_1.expect(lib_6.trace).to.not.be.an("undefined");
    });
    it("should be a decorator", function () {
        chai_1.expect(lib_6.trace).to.be.a("function");
    });
});
describe("traceable", function () {
    it("should exist", function () {
        chai_1.expect(lib_7.traceable).to.not.be.an("undefined");
    });
    it("should be a decorator", function () {
        chai_1.expect(lib_7.traceable).to.be.a("function");
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
//# sourceMappingURL=test.js.map