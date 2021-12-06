function Game() {
  this.init = function () {
    console.log("Init");
  };
  this.clearBoard = function () {
    console.log("Cleaning board...");
  };
}

var game = new Game();

Game.prototype.restart = function () {
  this.init();
  this.timer = setTimeout(function () {
    this.clearBoard();
  }, 0);
};

game.restart();
