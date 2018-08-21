import { expect } from "chai";
import { after, after_decorator } from "../lib";
import { buffered, buffered_decorator } from "../lib";
import { random } from "../lib";
import { UUID } from "../lib";

import "mocha";

describe("index.after", () => {
    it("should exist", () => {
        expect(after).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(after).to.be.a("function");
    });
    it("should have a decorator", () => {
        expect(after_decorator).to.be.a("function");
    });
});
describe("index.buffered", () => {
    it("should exist", () => {
        expect(buffered).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(buffered).to.be.a("function");
    });
    it("should have a decorator", () => {
        expect(buffered_decorator).to.be.a("function");
    });
});
describe("index.random", () => {
    it("should exist", () => {
        expect(random).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(random).to.be.a("function");
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
describe("index.UUID", () => {
    it("should be a string", () => {
        expect("00000000-0000-0000-0000-000000000000" as UUID).to.be.a("string");
    });
});
