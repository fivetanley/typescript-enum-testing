"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var Foo = /** @class */ (function () {
    function Foo() {
        this.Sizes = types_1.Sizes;
    }
    return Foo;
}());
var foo = new Foo();
console.log(foo.Sizes);
