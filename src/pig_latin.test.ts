import { PigLatin } from "../src/pig_latin";
describe("empty case", () => {
    it("returns an empty sting when given an empty string", () => {
        expect(PigLatin("")).toBe("");
    });
});

describe("one word case", () => {
    it("returns elloHay for Hello", () => {
        expect(PigLatin("Hello")).toBe("elloHay");
    });
});

describe("two word case", () => {
    it("returns elloHay orldWay for Hello World", () => {
        expect(PigLatin("Hello World")).toBe("elloHay orldWay");
    });
});

describe("leaves puntuation untouched", () => {
    it("returns elloHay orldWay ! for Hello World !", () => {
        expect(PigLatin("Hello World !")).toBe("elloHay orldWay !");
    });
});