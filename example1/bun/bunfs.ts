export function readFileText(): Promise<string> {
  const foo = Bun.file("foo.txt");
  return foo.text().then((text) => text + " from bun!");
}
