import type { TestFileReader } from "../src/Runtime";

export class BunFileReader implements TestFileReader {
  readFile(): Promise<string> {
    const foo = Bun.file("foo.txt");
    return foo.text().then((text) => text + " from bun!");
  }
}
