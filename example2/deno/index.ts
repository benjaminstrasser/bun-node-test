import type { Runtime } from "../src/Runtime";

export const DenoRuntime = {
  fs: {
    readFile,
  },
};

async function readFile(): Promise<string> {
  const text = await Deno.readTextFile("foo.txt");
  return text + " from deno!";
}
