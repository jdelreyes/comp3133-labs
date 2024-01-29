import { assert } from "chai";
import { add, mul, div, sub } from "../calculator.js";

describe("Calculator", () => {
  describe("addition", () => {
    it("add(5, 2) expected result 7 PASS", () => {
      const result = add(1, 2);
      assert.strictEqual(result, 3);
    });

    it("add(5,2) expected result 8 FAIL", () => {
      const result = add(5, 2);
      assert.notStrictEqual(result, 8);
    });
  });

  describe("subtraction", () => {
    it("sub(5, 2) expected result 3 PASS", () => {
      const result = sub(5, 2);
      assert.strictEqual(result, 3);
    });

    it("sub(5,2) expected result 5 FAIL", () => {
      const result = sub(5, 2);
      assert.notStrictEqual(result, 5);
    });
  });

  describe("multiplication", () => {
    it("mul(5, 2) expected result 10 PASS", () => {
      const result = mul(5, 2);
      assert.strictEqual(result, 10);
    });

    it("mul(5,2) expected result 12 FAIL", () => {
      const result = mul(5, 2);
      assert.notStrictEqual(result, 12);
    });
  });

  describe("division", () => {
    it("div(10, 2) expected result 5 PASS", () => {
      const result = div(10, 2);
      assert.strictEqual(result, 5);
    });

    it("div(10, 2) expected result 2 FAIL", () => {
      const result = div(10, 2);
      assert.notStrictEqual(result, 2);
    });
  });
});
