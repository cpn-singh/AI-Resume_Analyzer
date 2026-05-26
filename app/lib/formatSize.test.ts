import { formatSize } from "./formatSize";

// Test cases
const testCases = [
  { bytes: 0, expected: "0 B" },
  { bytes: 512, expected: "0.50 KB" },
  { bytes: 1024, expected: "1.00 KB" },
  { bytes: 1536, expected: "1.50 KB" },
  { bytes: 1048576, expected: "1.00 MB" },
  { bytes: 5242880, expected: "5.00 MB" },
  { bytes: 1073741824, expected: "1.00 GB" },
  { bytes: 2684354560, expected: "2.50 GB" },
  { bytes: 512000, expected: "500.00 KB" },
];

console.log("Testing formatSize function:\n");

testCases.forEach(({ bytes, expected }) => {
  const result = formatSize(bytes);
  const passed = result === expected;
  console.log(`${passed ? "✓" : "✗"} formatSize(${bytes}) = "${result}" (expected: "${expected}")`);
});
