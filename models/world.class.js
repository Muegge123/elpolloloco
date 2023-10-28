class World {
  character = new Character();
  enemies = [new Enemy(), new Enemy(), new Enemy()];
  clouds = [new Cloud(), new Cloud(), new Cloud()];
  backgrounds = [
    new Background("../img/5_background/layers/air.png", 0, 800),
    new Background("../img/5_background/layers/3_third_layer/1.png", 0, 280),
    new Background("../img/5_background/layers/2_second_layer/1.png", 0, 280),
    new Background("../img/5_background/layers/1_first_layer/1.png", 0, 280),
  ];
  coins = [
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
  ];
  salsas = [
    new Salsa(),
    new Salsa(),
    new Salsa(),
    new Salsa(),
    new Salsa(),
    new Salsa(),
    new Salsa(),
    new Salsa(),
    new Salsa(),
  ];

  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgrounds);
    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.coins);
    this.addObjectsToMap(this.salsas);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    // Draw wird immer wieder aufgerufen --> aus irgendeinem Grund kennt bei Objektorientierung Javascript nicht mehr this innherhalb von requestAnimationFrame --> daher Kunstgriff mit Variable self = this
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(movObj) {
    this.ctx.drawImage(
      movObj.img,
      movObj.x,
      movObj.y,
      movObj.width,
      movObj.height
    );
  }
}
