/**
 * Returns the union of two arrays (all unique elements from both arrays).
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} A new array containing all unique elements from both arrays.
 * @template T
 */
export function arrayUnion<T>(array1: T[], array2: T[]): T[] {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error("Both arguments must be arrays");
  }

  return Array.from(new Set([...array1, ...array2]));
}
