class Coin extends MovableObject {
  height = 100;
  width = 100;

  constructor() {
    super().loadImage("../img/8_coin/coin_1.png");

    this.x = Math.random() * 400;
    this.y = Math.random() * 400;
  }
}
