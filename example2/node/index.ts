import * as fs from "fs";
import type { TestFileReader } from "../src/Runtime";

export class NodeFileReader implements TestFileReader {
  readFile(): Promise<string> {
    return fs.promises
      .readFile("foo.txt", "utf-8")
      .then((text) => text + " from node!");
  }
}
