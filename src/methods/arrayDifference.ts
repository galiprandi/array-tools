/**
 * Returns the elements in the first array that are not present in the second array.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} A new array containing elements from `array1` that are not in `array2`.
 * @template T
 */
export function arrayDifference<T>(array: T[], valuesToRemove: T[]): T[] {
  if (!Array.isArray(array) || !Array.isArray(valuesToRemove)) {
    throw new Error("Both arguments must be arrays");
  }

  const valuesSet = new Set(valuesToRemove);
  return array.filter((item) => !valuesSet.has(item));
}
