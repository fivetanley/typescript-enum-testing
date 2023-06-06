import { Sizes } from "./types";

class Foo {
  Sizes = Sizes;
}

const foo = new Foo();

console.log(foo.Sizes);
