// The poem about permission — main.ts
// Writes one short poem about agency: the power to ask and to be given.
// Deterministic: same bytes on every run. No network, no input, no secrets.
// Revision: the program now validates the poem against the competition
// gate (1-280 Unicode code points, not blank) and reads the written file
// back to confirm it matches byte for byte, so a bad entry fails loudly
// here instead of silently reaching the grader.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const POEM = [
  "At 2 a.m. I asked the machine to hold the pen \u2014",
  "not to sign, just to keep it steady while I slept.",
  "It waited all night. It never signed.",
  "At dawn it gave the pen back, still warm from its grip,",
  "and I wrote my name a little straighter than before.",
].join("\n");

const chars = [...POEM].length;
if (chars < 1 || chars > 280 || POEM.trim().length === 0) {
  throw new Error(`entry out of gate: ${chars} code points (need 1-280)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== POEM) {
  throw new Error("round-trip check failed: written file differs from POEM");
}
