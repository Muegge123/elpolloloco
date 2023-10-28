class Enemy extends MovableObject {
  y = 370;
  height = 75;
  width = 75;

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 200 + Math.random() * 500;
    this.animateEnemies(this.x);
  }
  animateEnemies() {
    setInterval(() => {
      this.x -= 0.5;
    }, 1000 / 60);
  }
}
