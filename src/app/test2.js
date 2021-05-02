export class Human {
  constructor(val) {
    this.age = val;
  }
  age() {
    console.log(this.age);
    return this.age;
  }
}
