import { describe, expect, it } from "vitest";
import { arrayDifference } from "./arrayDifference";

describe("arrayDifference", () => {
  it("should return elements in array1 not in array2", () => {
    expect(arrayDifference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });

  it("should return an empty array when both arrays are empty", () => {
    expect(arrayDifference([], [])).toEqual([]);
  });

  it("should return an empty array when the first array is empty", () => {
    expect(arrayDifference([], [1, 2])).toEqual([]);
  });

  it("should return the original array when the second array is empty", () => {
    expect(arrayDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it("should handle duplicate values in array1", () => {
    expect(arrayDifference([1, 1, 2, 2, 3], [2])).toEqual([1, 1, 3]);
  });

  it("should handle duplicate values in array2", () => {
    expect(arrayDifference([1, 2, 3, 4], [2, 2, 3])).toEqual([1, 4]);
  });

  it("should handle different data types", () => {
    expect(arrayDifference([1, "2", true, false], ["2", false])).toEqual([
      1,
      true,
    ]);
  });

  it("should handle undefined and null values", () => {
    expect(arrayDifference([1, undefined, null, 2], [undefined])).toEqual([
      1,
      null,
      2,
    ]);
  });

  it("should work correctly when array2 is unsorted", () => {
    expect(arrayDifference([3, 1, 4, 2], [4, 1])).toEqual([3, 2]);
  });

  it("should throw an error if the first argument is not an array", () => {
    expect(() => arrayDifference("not array" as any, [1, 2])).toThrow(
      "Both arguments must be arrays",
    );
  });

  it("should throw an error if the second argument is not an array", () => {
    expect(() => arrayDifference([1, 2, 3], "not array" as any)).toThrow(
      "Both arguments must be arrays",
    );
  });
});
