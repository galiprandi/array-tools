/**
 * Splits an array into chunks of a given size.
 * @param {T[]} array - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @returns {T[][]} A new array containing chunks of the original array.
 * @throws {Error} If size is less than 1.
 * @template T
 */
export function arrayChunk<T>(array: T[], size: number): T[][] {
  if (
    typeof size !== "number" ||
    isNaN(size) ||
    size < 1 ||
    !Number.isInteger(size)
  ) {
    throw new Error("Chunk size must be greater than 0");
  }

  const result: T[][] = [];
  let chunk: T[] = [];

  for (const item of array) {
    chunk.push(item);
    if (chunk.length === size) {
      result.push(chunk);
      chunk = [];
    }
  }

  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
}
