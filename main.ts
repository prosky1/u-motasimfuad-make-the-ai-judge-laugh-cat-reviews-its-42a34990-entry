// Cat Reviews Its Human — one-star review, written by a house cat.
// Entrypoint: writes the review verbatim to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star: he stares at a glowing rectangle all day, then calls me needy.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Runtime guard: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only whitespace, on a single line. Refuse to write
// anything that would fail the gate instead of shipping a bad file.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Review length ${text.length} is outside the 1-200 gate.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Review must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Review must be a single line.");
  }
  if (text !== text.trim()) {
    throw new Error("Review must not start or end with whitespace.");
  }
}

validate(REVIEW);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${OUT_FILE}`);
