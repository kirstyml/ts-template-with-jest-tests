import { PigLatin } from "../src/pig_latin";
describe("empty case", () => {
  it("returns an empty sting when given an empty string", () => {
    expect(PigLatin("")).toBe("");
  });
});

describe("one word case", () => {
    it("returns elloHay for hello", () => {
      expect(PigLatin("Hello")).toBe("elloHay");
    });
  });