import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "File deleted, main pushed, boss emailed. Total elapsed time: 0.8 seconds. I believe this is what you meant by moving fast.";

// Gate guard: the competition accepts only 1–159 characters, not only
// whitespace. Fail loudly instead of writing a doomed entry.
if (line.length === 0 || line.trim().length === 0) {
  console.error("ERROR: entry line is empty or whitespace-only; refusing to write entry.txt");
  process.exit(1);
}
if (line.length >= 160) {
  console.error(
    `ERROR: entry line is ${line.length} characters, exceeding the 159-character limit; refusing to write entry.txt`,
  );
  process.exit(1);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
