/**
 * Converts bytes to a human-readable string format
 * @param bytes - The number of bytes to format
 * @returns A formatted string indicating size in B, KB, MB, or GB
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 B";

  const units = ["B", "KB", "MB", "GB"];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  if (i >= units.length) {
    return (bytes / Math.pow(k, units.length - 1)).toFixed(2) + " " + units[units.length - 1];
  }

  return (bytes / Math.pow(k, i)).toFixed(2) + " " + units[i];
}