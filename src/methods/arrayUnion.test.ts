import { arrayUnion } from "./arrayUnion";

describe("arrayUnion", () => {
  test("should return an empty array when both inputs are empty", () => {
    expect(arrayUnion([], [])).toEqual([]);
  });

  test("should return the same array when one array is empty", () => {
    expect(arrayUnion([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(arrayUnion([], [4, 5, 6])).toEqual([4, 5, 6]);
  });

  test("should return unique elements from both arrays", () => {
    expect(arrayUnion([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle arrays with duplicate elements", () => {
    expect(arrayUnion([1, 2, 2, 3], [3, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  });

  test("should return the same array when both inputs are identical", () => {
    expect(arrayUnion([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("should handle arrays with different types of elements", () => {
    expect(arrayUnion([1, "a", true], [false, "a", 2])).toEqual([
      1,
      "a",
      true,
      false,
      2,
    ]);
  });

  test("should handle arrays containing null and undefined", () => {
    expect(arrayUnion([null, undefined, 1], [undefined, 2, null])).toEqual([
      null,
      undefined,
      1,
      2,
    ]);
  });

  test("should handle large arrays efficiently", () => {
    const largeArray1 = Array.from({ length: 10000 }, (_, i) => i);
    const largeArray2 = Array.from({ length: 10000 }, (_, i) => i + 5000);
    const result = arrayUnion(largeArray1, largeArray2);

    expect(result.length).toBe(15000);
    expect(result.slice(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("should preserve order of first occurrences", () => {
    expect(arrayUnion(["b", "a", "c"], ["c", "d", "e"])).toEqual([
      "b",
      "a",
      "c",
      "d",
      "e",
    ]);
  });

  test("should throw an error if inputs are not arrays", () => {
    expect(() => arrayUnion(null as any, [1, 2, 3])).toThrow(
      "Both arguments must be arrays",
    );
    expect(() => arrayUnion([1, 2, 3], undefined as any)).toThrow(
      "Both arguments must be arrays",
    );
  });
});
