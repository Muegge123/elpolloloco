class Character extends MovableObject {
  y = 200;
  height = 250;

  constructor() {
    super().loadImage("../img/2_character_pepe/1_idle/idle/I-1.png");
  }

  jump() {}
}
