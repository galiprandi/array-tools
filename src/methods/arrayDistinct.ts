/**
 * Returns elements that are unique in either of the two arrays.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} A new array containing elements that are not in both arrays.
 * @template T
 */
export function arrayDistinct<T>(array1: T[], array2: T[]): T[] {
  if (!array1.length) return [...array2];
  if (!array2.length) return [...array1];
  if (array1 === array2) return [];

  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const result: T[] = [];

  for (const item of array1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }

  for (const item of array2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }

  return result;
}
