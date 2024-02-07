import type { Runtime } from "../src/Runtime";

export const BunRuntime = {
  fs: {
    readFile,
  },
};

function readFile(): Promise<string> {
  const foo = Bun.file("foo.txt");
  return foo.text().then((text) => text + " from bun!");
}
