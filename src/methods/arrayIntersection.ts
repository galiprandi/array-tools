/**
 * Returns the intersection of two arrays (elements present in both arrays).
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} A new array containing elements present in both arrays.
 * @template T
 */
export function arrayIntersection<T>(array1: T[], array2: T[]): T[] {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error("Both arguments must be arrays");
  }

  const set2 = new Set(array2);
  return Array.from(new Set(array1.filter((item) => set2.has(item))));
}
