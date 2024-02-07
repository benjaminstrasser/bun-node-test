import { TestFileReader } from "./Runtime";

TestFileReader()
  .then((fileReader) => fileReader.readFile())
  .then((text: string) => console.log(text));
