export interface TestFileReader {
  readFile(): Promise<string>;
}

export async function TestFileReader(): Promise<TestFileReader> {
  let fileReader: TestFileReader | null = null;
  if (typeof Bun !== "undefined") {
    await import("../bun").then(
      (module) => (fileReader = new module.BunFileReader())
    );
  } else if (
    typeof process !== "undefined" &&
    process.versions &&
    process.versions.node
  ) {
    await import("../node").then(
      (module) => (fileReader = new module.NodeFileReader())
    );
  }

  return fileReader!;
}
