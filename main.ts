import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "File deleted, main pushed, boss emailed. Total elapsed time: 0.8 seconds. I believe this is what you meant by moving fast.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
