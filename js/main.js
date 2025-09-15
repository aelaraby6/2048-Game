import {
  createBoard,
  combineRow,
  combineColumn,
  checkWin,
  checkLose,
} from "./board.js";
import { moveTo } from "./moves.js";
import { addColours, generateRandomNumber, reset } from "./utils.js";

function main() {
  const gridDisplay = document.getElementById("grid");
  const scoreDiv = document.getElementById("score");
  const result = document.getElementById("p-2");
  const SIZE = 4;
  let tiles = [];
  let Score = 0;

  createBoard(SIZE, gridDisplay, tiles);

  generateRandomNumber(tiles);
  generateRandomNumber(tiles);

  // Move To Right
  function KeyRight() {
    moveTo(SIZE, tiles, "right");
    Score = combineRow(SIZE, tiles, Score, scoreDiv, "right");
    moveTo(SIZE, tiles, "right");
    generateRandomNumber(tiles);
    addColours(tiles);
  }

  // Move To Left
  function keyLeft() {
    moveTo(SIZE, tiles, "left");
    Score = combineRow(SIZE, tiles, Score, scoreDiv, "left");
    moveTo(SIZE, tiles, "left");
    generateRandomNumber(tiles);
    addColours(tiles);
  }

  // Move To Up
  function keyUp() {
    moveTo(SIZE, tiles, "up");
    Score = combineColumn(SIZE, tiles, Score, scoreDiv, "up");
    moveTo(SIZE, tiles, "up");
    generateRandomNumber(tiles);
    addColours(tiles);
  }

  // Move To Down
  function keyDown() {
    moveTo(SIZE, tiles, "down");
    Score = combineColumn(SIZE, tiles, Score, scoreDiv, "down");
    moveTo(SIZE, tiles, "down");
    generateRandomNumber(tiles);
    addColours(tiles);
  }

  const handleKey = (e) => {
    if (e.key === "ArrowRight") KeyRight();
    if (e.key === "ArrowLeft") keyLeft();
    if (e.key === "ArrowUp") keyUp();
    if (e.key === "ArrowDown") keyDown();
  };

  document.addEventListener("keydown", handleKey);

  let intervalId = setInterval(() => {
    addColours(tiles);
    if (checkWin(tiles, result, intervalId, handleKey)) return;
    if (checkLose(tiles, SIZE, result, intervalId, handleKey)) return;
  }, 50);

  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    Score = 0;
    scoreDiv.innerHTML = Score;
    result.innerHTML = "Join the numbers and get to the <b>2048 tile!</b>";
    reset(tiles);
    generateRandomNumber(tiles);
    generateRandomNumber(tiles);
    addColours(tiles);
  });
}

main();
