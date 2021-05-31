import { expect } from "chai";
import { after } from "../lib";
import { before } from "../lib";
import { buffered } from "../lib";
import { deprecated, original } from "../lib";
import { filter } from "../lib";
import { array2tree, object2tree } from "../lib";
import { partial } from "../lib";
import { queued } from "../lib";
import { random } from "../lib";
import { trace } from "../lib";
import { traceable } from "../lib";
import { tree2array, tree2object } from "../lib";

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
describe("deprecated", () => {
    it("should exist", () => {
        expect(deprecated).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(deprecated).to.be.a("function");
    });
});
describe("original", () => {
    it("should exist", () => {
        expect(original).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(original).to.be.a("function");
    });
});
describe("filter", () => {
    it("should exist", () => {
        expect(filter).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(filter).to.be.a("function");
    });
});
describe("array2tree", () => {
    it("should exist", () => {
        expect(array2tree).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(array2tree).to.be.a("function");
    });
});
describe("object2tree", () => {
    it("should exist", () => {
        expect(object2tree).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(object2tree).to.be.a("function");
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
describe("queued", () => {
    it("should exist", () => {
        expect(queued).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(queued).to.be.a("function");
    });
});
describe("queued.auto", () => {
    it("should exist", () => {
        expect(queued.auto).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(queued.auto).to.be.a("function");
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
describe("tree2array", () => {
    it("should exist", () => {
        expect(tree2array).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(tree2array).to.be.a("function");
    });
});
describe("tree2object", () => {
    it("should exist", () => {
        expect(tree2object).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(tree2object).to.be.a("function");
    });
});
