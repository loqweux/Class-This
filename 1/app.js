"use strict";

class Object {
  constructor(name) {
    this.name = name;
  }
  hi() {
    return `Hello ${this.name}!`;
  }
}
const obj = new Object("maxim");
console.log(obj.hi());
