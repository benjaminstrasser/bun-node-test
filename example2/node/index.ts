import * as fs from "fs";
import type { Runtime } from "../src/Runtime";

export const NodeRuntime = {
  fs: {
    readFile,
  },
};

function readFile(): Promise<string> {
  return fs.promises
    .readFile("foo.txt", "utf-8")
    .then((text) => text + " from node!");
}
