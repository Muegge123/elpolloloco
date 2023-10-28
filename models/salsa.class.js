class Salsa extends MovableObject {
  height = 100;
  width = 100;

  constructor() {
    super().loadImage("../img/6_salsa_bottle/salsa_bottle.png");

    this.x = Math.random() * 500;
    this.y = Math.random() * 200;
  }
}
