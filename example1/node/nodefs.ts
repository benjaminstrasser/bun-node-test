import * as fs from "fs";

export function readFileText(): Promise<string> {
  return fs.promises
    .readFile("foo.txt", "utf-8")
    .then((text) => text + " from node!");
}
