/**
 * Sleeps for the specified time in milliseconds.
 *
 * @param {number} time - The time to sleep.
 * @return {Promise<void>} A promise that resolves after the specified time.
 */
export function sleep(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
