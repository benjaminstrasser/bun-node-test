export interface Runtime {
  fs: {
    readFile(): Promise<string>;
  };
}

export async function runtime() {
  let runtime: Runtime | null = null;
  if (typeof Bun !== "undefined") {
    await import("../bun").then((module) => (runtime = module.BunRuntime));
  } else if (
    typeof process !== "undefined" &&
    process.versions &&
    process.versions.node
  ) {
    await import("../node").then((module) => (runtime = module.NodeRuntime));
  }

  return runtime!;
}
