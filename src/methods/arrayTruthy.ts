/**
 * arrayTruthy
 *
 * Removes all falsy values (such as null, undefined, false, 0, '', and NaN) from an array.
 * Returns a new array containing only truthy values.
 *
 * @param {T[]} array - The array to be filtered.
 * @returns {T[]} A new array containing only truthy values.
 *
 * @example
 * const result = arrayTruthy([0, 1, false, 2, '', 3, null, undefined, NaN]);
 * console.log(result); // [1, 2, 3]
 */
export function arrayTruthy<T>(array: T[]): T[] {
  if (!Array.isArray(array)) throw new Error("Input must be an array");

  return array.filter((item) => Boolean(item));
}
