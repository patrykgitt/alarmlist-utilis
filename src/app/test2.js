export class Human {
  constructor(val) {
    this.age = val;
  }
  public age() {
    console.log(this.age);
    return this.age;
  }
}
