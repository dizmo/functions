import { Global } from "../lib";
declare const global: Global;
import { UUID } from "../lib";
const uuid: UUID = "0000..0000";

import { expect } from "chai";
import { after } from "../lib";
import { before } from "../lib";
import { buffered } from "../lib";
import { partial } from "../lib";
import { random } from "../lib";
import { trace } from "../lib";
import { traceable } from "../lib";

import "mocha";

describe("after", () => {
    it("should exist", () => {
        expect(after).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(after).to.be.a("function");
    });
    it("should have a decorator", () => {
        expect(after.decorator).to.be.a("function");
    });
});
describe("before", () => {
    it("should exist", () => {
        expect(before).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(before).to.be.a("function");
    });
    it("should have a decorator", () => {
        expect(before.decorator).to.be.a("function");
    });
});
describe("buffered", () => {
    it("should exist", () => {
        expect(buffered).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(buffered).to.be.a("function");
    });
    it("should have a decorator", () => {
        expect(buffered.decorator).to.be.a("function");
    });
});
describe("Global", () => {
    it("should allow a `global` declaration", () => {
        expect(typeof global).to.not.be.an("undefined");
    });
    it("should allow a `global` as an object", () => {
        expect(typeof global).to.eq("object");
    });
});
describe("partial", () => {
    it("should exist", () => {
        expect(partial).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(partial).to.be.a("function");
    });
});
describe("Function.partial", () => {
    it("should exist", () => {
        expect(Function.partial).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(Function.partial).to.be.a("function");
    });
});
describe("random", () => {
    it("should exist", () => {
        expect(random).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(random).to.be.a("function");
    });
});
describe("trace", () => {
    it("should exist", () => {
        expect(trace).to.not.be.an("undefined");
    });
    it("should be a decorator", () => {
        expect(trace).to.be.a("function");
    });
});
describe("traceable", () => {
    it("should exist", () => {
        expect(traceable).to.not.be.an("undefined");
    });
    it("should be a decorator", () => {
        expect(traceable).to.be.a("function");
    });
});
describe("String.random", () => {
    it("should exist", () => {
        expect(String.random).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(String.random).to.be.a("function");
    });
});
describe("UUID", () => {
    it("should allow a `uuid` declaration", () => {
        expect(typeof uuid).to.not.be.an("undefined");
    });
    it("should allow a `uuid` as a string", () => {
        expect(typeof uuid).to.eq("string");
    });
});
