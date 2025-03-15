import { arrayChunkBy } from "./arrayChunkBy";

describe("arrayChunkBy", () => {
  it("should return an empty array when input is empty", () => {
    expect(arrayChunkBy([], (x) => x)).toEqual([]);
  });

  it("should group consecutive elements with the same key", () => {
    expect(arrayChunkBy([1, 1, 2, 2, 3, 1], (x) => x)).toEqual([
      [1, 1],
      [2, 2],
      [3],
      [1],
    ]);
  });

  it("should group single elements separately if all are unique", () => {
    expect(arrayChunkBy([1, 2, 3, 4], (x) => x)).toEqual([[1], [2], [3], [4]]);
  });

  it("should handle cases where the key changes frequently", () => {
    expect(arrayChunkBy([1, 2, 1, 2, 1, 2], (x) => x)).toEqual([
      [1],
      [2],
      [1],
      [2],
      [1],
      [2],
    ]);
  });

  it("should group words by their first letter", () => {
    expect(
      arrayChunkBy(
        ["apple", "ant", "banana", "berry", "carrot"],
        (word) => word[0],
      ),
    ).toEqual([["apple", "ant"], ["banana", "berry"], ["carrot"]]);
  });

  it("should group numbers by even/odd", () => {
    expect(
      arrayChunkBy([1, 3, 5, 2, 4, 6, 7, 9, 11], (num) => num % 2),
    ).toEqual([
      [1, 3, 5],
      [2, 4, 6],
      [7, 9, 11],
    ]);
  });

  it("should group objects based on a property", () => {
    const data = [
      { id: 1, category: "A" },
      { id: 2, category: "A" },
      { id: 3, category: "B" },
      { id: 4, category: "B" },
      { id: 5, category: "A" },
    ];
    expect(arrayChunkBy(data, (item) => item.category)).toEqual([
      [
        { id: 1, category: "A" },
        { id: 2, category: "A" },
      ],
      [
        { id: 3, category: "B" },
        { id: 4, category: "B" },
      ],
      [{ id: 5, category: "A" }],
    ]);
  });

  it("should handle arrays with undefined and null values", () => {
    expect(
      arrayChunkBy([null, null, undefined, undefined, 1, 1], (x) => x),
    ).toEqual([
      [null, null],
      [undefined, undefined],
      [1, 1],
    ]);
  });

  it("should handle empty strings and different falsy values", () => {
    expect(
      arrayChunkBy(["", "", 0, 0, false, false, "text"], (x) => x),
    ).toEqual([["", ""], [0, 0], [false, false], ["text"]]);
  });

  it("should handle deeply nested arrays as values", () => {
    expect(
      arrayChunkBy([[1], [1], [2, 2], [2, 2], [3]], (x) => JSON.stringify(x)),
    ).toEqual([
      [[1], [1]],
      [
        [2, 2],
        [2, 2],
      ],
      [[3]],
    ]);
  });

  it("should throw an error if input is not an array", () => {
    expect(() => arrayChunkBy(null as any, (x) => x)).toThrow(
      "Input must be an array",
    );
  });

  it("should throw an error if keySelector is not a function", () => {
    expect(() => arrayChunkBy([1, 2, 3], null as any)).toThrow(
      "Key selector must be a function",
    );
  });
});
