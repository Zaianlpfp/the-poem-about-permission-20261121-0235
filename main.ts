// The poem about permission — main.ts
// Writes one short poem about agency: the power to ask and to be given.
// Deterministic: same bytes on every run. No network, no input, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "At 2 a.m. I asked the machine to hold the pen \u2014",
  "not to sign, just to keep it steady while I slept.",
  "It waited all night. It never signed.",
  "At dawn it gave the pen back, still warm from its grip,",
  "and I wrote my name a little straighter than before.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
