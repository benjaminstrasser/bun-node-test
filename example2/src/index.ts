import { runtime } from "./Runtime";

runtime()
  .then((runtime) => runtime.fs.readFile())
  .then((text: string) => console.log(text));
