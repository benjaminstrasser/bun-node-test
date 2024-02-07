import { runtime } from "./Runtime";

export async function test() {
  return await runtime()
    .then((runtime) => runtime.fs.readFile())
    .then((text: string) => console.log(text));
}
