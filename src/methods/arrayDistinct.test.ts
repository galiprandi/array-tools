import { describe, expect, it } from "vitest";
import { arrayDistinct } from "./arrayDistinct";

describe("arrayDistinct", () => {
  it("should return elements that are not in both arrays", () => {
    expect(arrayDistinct([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
  });

  it("should return an empty array if both arrays are identical", () => {
    expect(arrayDistinct([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  // Casos límite (border cases)
  it("should handle empty arrays", () => {
    expect(arrayDistinct([], [])).toEqual([]);
    expect(arrayDistinct([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(arrayDistinct([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should handle arrays with duplicate elements", () => {
    expect(arrayDistinct([1, 1, 2, 3], [2, 3, 4])).toEqual([1, 1, 4]);
    expect(arrayDistinct([1, 2, 3], [2, 2, 3, 4])).toEqual([1, 4]);
  });

  it("should handle arrays with different types", () => {
    expect(arrayDistinct(["a", "b", "c"], ["b", "c", "d"])).toEqual(["a", "d"]);
    expect(arrayDistinct([true, false], [false, true])).toEqual([]);
  });

  it("should handle arrays with objects", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    // Nota: aquí los objetos son comparados por referencia, no por valor
    expect(arrayDistinct([obj1, obj2], [obj2, obj3])).toEqual([obj1, obj3]);

    // Probar con objetos que son iguales en valor pero diferentes en referencia
    expect(arrayDistinct([{ id: 1 }], [{ id: 1 }])).toEqual([
      { id: 1 },
      { id: 1 },
    ]);
  });

  it("should handle arrays with null and undefined values", () => {
    expect(arrayDistinct([null, undefined, 1], [1, 2, 3])).toEqual([
      null,
      undefined,
      2,
      3,
    ]);
    expect(arrayDistinct([1, 2, 3], [undefined, null, 3])).toEqual([
      1,
      2,
      undefined,
      null,
    ]);
  });

  it("should handle nested arrays", () => {
    // Arrays anidados profundamente
    const nested1 = [[[1]]];
    const nested2 = [[[2]]];
    expect(arrayDistinct(nested1, nested2)).toEqual([[[1]], [[2]]]);
  });

  it("should handle arrays with mixed types", () => {
    expect(arrayDistinct([1, "a", true], ["a", false, 2])).toEqual([
      1,
      true,
      false,
      2,
    ]);
  });

  it("should handle arrays with special characters", () => {
    expect(arrayDistinct(["@", "#", "$"], ["#", "$", "%"])).toEqual(["@", "%"]);
  });

  it("should handle arrays with nested objects", () => {
    const obj1 = { id: 1, nested: { key: "value" } };
    const obj2 = { id: 2, nested: { key: "value" } };
    expect(arrayDistinct([obj1], [obj2])).toEqual([obj1, obj2]);
  });

  it("should handle arrays with functions", () => {
    const func1 = () => {};
    const func2 = () => {};
    expect(arrayDistinct([func1], [func2])).toEqual([func1, func2]);
  });
});
