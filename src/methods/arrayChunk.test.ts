import { describe, expect, it } from "vitest";
import { arrayChunk } from "./arrayChunk";

describe("arrayChunk", () => {
  it("should split array into chunks of the specified size", () => {
    expect(arrayChunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should return an empty array when given an empty array", () => {
    expect(arrayChunk([], 2)).toEqual([]);
  });

  it("should throw an error if chunk size is 0 or negative", () => {
    expect(() => arrayChunk([1, 2, 3], 0)).toThrow();
  });

  it("should return the whole array as a single chunk if size is larger than array length", () => {
    expect(arrayChunk([1, 2], 5)).toEqual([[1, 2]]);
  });

  it("should return each element as a separate chunk when size is 1", () => {
    expect(arrayChunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it("should throw an error if chunk size is not an integer", () => {
    expect(() => arrayChunk([1, 2, 3, 4], 1.5)).toThrow();
  });

  it("should throw an error if chunk size is NaN", () => {
    expect(() => arrayChunk([1, 2, 3], NaN)).toThrow();
  });

  it("should handle arrays with non-numeric values", () => {
    expect(arrayChunk(["a", "b", "c"], 2)).toEqual([["a", "b"], ["c"]]);
  });

  it("should split array into chunks of the specified size", () => {
    expect(arrayChunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should throw an error if chunk size is 0 or negative", () => {
    expect(() => arrayChunk([1, 2, 3], 0)).toThrow();
  });
});
