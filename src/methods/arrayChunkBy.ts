/**
 * Splits an array into chunks based on a condition function.
 * Each new chunk starts when the condition function returns a new value.
 *
 * @param array - The array to be chunked.
 * @param keySelector - A function that determines the key for each element.
 * @returns An array of chunks, where each chunk contains elements with the same key.
 *
 * @example
 * chunkBy([1, 1, 2, 2, 3, 1], x => x)
 * // Output: [[1, 1], [2, 2], [3], [1]]
 */
export function arrayChunkBy<T, K>(
  array: T[],
  keySelector: (item: T) => K,
): T[][] {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  if (typeof keySelector !== "function") {
    throw new Error("Key selector must be a function");
  }

  const result: T[][] = [];
  let currentChunk: T[] = [];

  for (const item of array) {
    const key = keySelector(item);

    if (currentChunk.length === 0 || keySelector(currentChunk[0]) === key) {
      currentChunk.push(item);
    } else {
      result.push(currentChunk);
      currentChunk = [item];
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
}
