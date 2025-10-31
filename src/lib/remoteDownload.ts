/**
 * Triggers a browser download (or open-in-new-tab) for the resource at the given URL
 * by creating and programmatically clicking a temporary anchor element.
 *
 * The function:
 * 1. Creates an <a> element.
 * 2. Assigns the provided URL to its href.
 * 3. Sets the desired filename via the download attribute.
 * 4. Forces a new browsing context with target="_blank" (can improve reliability for some file types).
 * 5. Clicks the element to initiate the download.
 * 6. Cleans up by removing the element from the DOM.
 *
 * @param url - The absolute or relative URL of the resource to download.
 * @param fileName - The suggested filename for the saved file (honored by most modern browsers).
 * @returns Always returns true once the download action has been initiated.
 *
 * @remarks
 * - This must typically be called in direct response to a trusted user gesture (e.g., a click)
 *   to avoid being blocked by popup/download blockers.
 * - Cross-origin restrictions and Content-Disposition headers on the server may influence
 *   the final filename or whether the file is downloaded vs displayed.
 */
export function remoteDownload(url: string, fileName: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  return true;
}
