export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  static get [Symbol.species]() {
    return this.prototype.constructor;
  }

  cloneCar() {
    return new (this.constructor[Symbol.species])();
  }
}
