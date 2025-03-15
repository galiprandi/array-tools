import { describe, expect, it } from "vitest";
import { arrayDifference } from "./arrayDifference";

describe("arrayDifference", () => {
  it("should return elements in the first array that are not in the second", () => {
    expect(arrayDifference([1, 2, 3], [2, 3])).toEqual([1]);
  });

  it("should return an empty array if all elements are in both arrays", () => {
    expect(arrayDifference([1, 2], [1, 2])).toEqual([]);
  });

  it("should return the original array if the second array is empty", () => {
    expect(arrayDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  // Additional edge cases
  it("should return an empty array if both arrays are empty", () => {
    expect(arrayDifference([], [])).toEqual([]);
  });

  it("should return an empty array if the first array is empty and the second is not", () => {
    expect(arrayDifference([], [1, 2, 3])).toEqual([]);
  });

  it("should handle arrays with duplicate values", () => {
    expect(arrayDifference([1, 2, 2, 3], [2])).toEqual([1, 3]);
  });

  it("should correctly handle arrays with different data types", () => {
    expect(arrayDifference([1, "2", 3, true], ["2", true])).toEqual([1, 3]);
  });

  it("should handle non-contiguous elements", () => {
    expect(arrayDifference([10, 20, 30, 40, 50], [20, 40])).toEqual([
      10, 30, 50,
    ]);
  });

  it("should handle undefined and null values", () => {
    expect(arrayDifference([1, undefined, 3, null], [undefined, null])).toEqual(
      [1, 3],
    );
  });
});
