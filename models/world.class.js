class World {
  character = new Character();
  enemies = [new Enemy(), new Enemy(), new Enemy()];

  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.height,
      this.character.width
    );

    // for (let i = 0; i < this.enemies.length; i++) {
    //   this.ctx.drawImage(
    //     this.enemies[i].img,
    //     this.enemies[i].x,
    //     this.enemies[i].y,
    //     this.enemies[i].height,
    //     this.enemies[i].width
    //   );
    // }

    // console.log(this.enemies);

    this.enemies.forEach((enemy) => {
      this.ctx.drawImage(
        enemy.img,
        enemy.x,
        enemy.y,
        enemy.height,
        enemy.width
      );
    });

    // Draw wird immer wieder aufgerufen --> aus irgendeinem Grund kennt bei Objektorientierung Javascript nicht mehr this innherhalb von requestAnimationFrame --> daher Kunstgriff mit Variable self = this
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
