export interface Runtime {
  fs: {
    readFile(): Promise<string>;
  };
}

export async function runtime() {
  if (typeof Bun !== "undefined") {
    return (await import("../bun")).BunRuntime;
  } else if (typeof Deno !== "undefined") {
    return (await import("../deno")).DenoRuntime;
  } else if (
    typeof process !== "undefined" &&
    process.versions &&
    process.versions.node
  ) {
    return (await import("../node")).NodeRuntime;
  }

  throw new Error("Unsupported runtime");
}
