/**
 * Sorts an array based on a key extracted by the keySelector function.
 * Utilizes the Schwartzian transform (decorate-sort-undecorate) pattern to improve performance
 * by computing the key only once per element.
 *
 * @param array - The array to sort.
 * @param keySelector - A function that extracts the comparison key from each element.
 * @param order - Optional. Sorting order: 'asc' for ascending (default) or 'desc' for descending.
 * @returns A new array sorted in the specified order.
 *
 * @warning This method uses the Schwartzian pattern, which might not be optimal in cases where
 * the keySelector function is simple and inexpensive. In such cases, it is recommended to use a
 * direct sort without decorating and undecorating to avoid the additional overhead.
 *
 * @template T
 */
export function orderBy<T>(
  array: T[],
  keySelector: (item: T) => any,
  order: "asc" | "desc" = "asc",
): T[] {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  // Decorate: Compute the key for each element only once.
  const decorated = array.map((item) => ({ item, key: keySelector(item) }));

  // Sort: Sort the decorated array using the computed keys (O(n log n)).
  decorated.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
  });

  // If descending order is specified, reverse the decorated array.
  if (order === "desc") {
    decorated.reverse();
  }

  // Undecorate: Extract and return the original items in sorted order.
  return decorated.map((deco) => deco.item);
}
