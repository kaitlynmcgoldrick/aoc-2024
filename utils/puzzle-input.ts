import fs from "node:fs";

export class PuzzleInput {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  process() {
    return fs.readFileSync(this.filename, "utf8").split("\n");
  }
}
