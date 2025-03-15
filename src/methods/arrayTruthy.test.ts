import { describe, expect, it } from "vitest";
import { arrayTruthy } from "./arrayTruthy";

describe("arrayTruthy", () => {
  it("should remove all falsy values from an array", () => {
    const input = [0, 1, false, 2, "", 3, null, undefined, NaN];
    const expected = [1, 2, 3];
    expect(arrayTruthy(input)).toEqual(expected);
  });

  it("should return an empty array when input is empty", () => {
    expect(arrayTruthy([])).toEqual([]);
  });

  it("should not remove truthy values", () => {
    const obj = { a: 1 };
    const arr = [1, 2];
    const func = () => "hello";
    const input = [1, "hello", true, obj, arr, func];
    // All elements are truthy, so the output should equal the input.
    expect(arrayTruthy(input)).toEqual(input);
  });

  it("should not modify the original array", () => {
    const input = [0, 1, false, 2, "", 3, null, undefined, NaN];
    const copy = [...input];
    arrayTruthy(input);
    expect(input).toEqual(copy);
  });

  it("should throw an error if input is not an array", () => {
    expect(() => arrayTruthy(null as any)).toThrow("Input must be an array");
    expect(() => arrayTruthy(undefined as any)).toThrow(
      "Input must be an array",
    );
    expect(() => arrayTruthy("not an array" as any)).toThrow(
      "Input must be an array",
    );
    expect(() => arrayTruthy({} as any)).toThrow("Input must be an array");
  });

  it("should remove only falsy values and leave all truthy values intact", () => {
    // Create distinct references for object and array to verify they are preserved.
    const truthyObj = { key: "value" };
    const truthyArr: any[] = [42];
    const input = [
      false,
      0,
      "",
      null,
      undefined,
      NaN,
      "0",
      0.1,
      truthyArr,
      truthyObj,
      true,
    ];
    const expected = ["0", 0.1, truthyArr, truthyObj, true];
    expect(arrayTruthy(input)).toEqual(expected);
  });
});
