/**
 * Splits an input array into an array of subarrays (chunks), each with a maximum length
 * equal to the provided size. The final chunk may contain fewer elements if the total
 * number of items is not evenly divisible by the chunk size.
 *
 * @typeParam T - Element type of the input array.
 * @param arr - The source array to be partitioned. If empty, an empty array is returned.
 * @param size - Positive, non-zero maximum length of each chunk.
 * @returns A new array containing the chunked subarrays, in original order.
 *
 * @throws {RangeError} If size is not a positive integer greater than 0 (call site
 * should validate when necessary; current implementation assumes valid input).
 *
 * @example
 * // Basic usage
 * const result = chunkArray([1, 2, 3, 4, 5], 2);
 * // result => [[1, 2], [3, 4], [5]]
 *
 */
export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};