import { orderBy } from "./orderBy";

describe("orderBy", () => {
  it("should return an empty array when input is empty", () => {
    expect(orderBy([], (x) => x)).toEqual([]);
  });

  it("should sort an array of numbers in ascending order by default", () => {
    const input = [5, 2, 9, 1, 5, 6];
    const result = orderBy(input, (x) => x);
    expect(result).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it("should sort an array of numbers in ascending order when 'asc' is provided", () => {
    const input = [5, 2, 9, 1, 5, 6];
    const result = orderBy(input, (x) => x, "asc");
    expect(result).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it("should sort an array of numbers in descending order when 'desc' is provided", () => {
    const input = [5, 2, 9, 1, 5, 6];
    const result = orderBy(input, (x) => x, "desc");
    expect(result).toEqual([9, 6, 5, 5, 2, 1]);
  });

  it("should sort an array of strings alphabetically in ascending order", () => {
    const input = ["banana", "apple", "cherry"];
    const result = orderBy(input, (x) => x);
    expect(result).toEqual(["apple", "banana", "cherry"]);
  });

  it("should sort an array of objects by a key in ascending order", () => {
    const input = [
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const result = orderBy(input, (x) => x.id, "asc");
    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
  });

  it("should sort an array of objects by a key in descending order", () => {
    const input = [
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const result = orderBy(input, (x) => x.id, "desc");
    expect(result).toEqual([
      { id: 3, name: "Charlie" },
      { id: 2, name: "Bob" },
      { id: 1, name: "Alice" },
    ]);
  });

  it("should maintain the original order for equal keys (stable sort)", () => {
    const input = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 30 },
    ];
    const result = orderBy(input, (x) => x.age);
    expect(result).toEqual(input);
  });

  it("should handle undefined keys correctly", () => {
    const input = [1, 2, 3];
    const result = orderBy(input, () => undefined);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should throw an error if input is not an array", () => {
    expect(() => orderBy(null as any, (x) => x)).toThrow(
      "Input must be an array",
    );
    expect(() => orderBy("not an array" as any, (x) => x)).toThrow(
      "Input must be an array",
    );
  });
});
