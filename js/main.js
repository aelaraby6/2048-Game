import { createBoard, combineLeft, combineRight } from "./grid.js";
import { moveToLeft, moveToRight, moveToUp } from "./moves.js";
import { generateRandomNumber } from "./utils.js";

function main() {
  document.addEventListener("DOMContentLoaded", () => {
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
      moveToRight(SIZE, tiles);
      Score = combineRight(SIZE, tiles, Score, scoreDiv);
      moveToRight(SIZE, tiles);
      generateRandomNumber(tiles);
    }

    // Move To Left
    function keyLeft() {
      moveToLeft(SIZE, tiles);
      Score = combineLeft(SIZE, tiles, Score, scoreDiv);
      moveToLeft(SIZE, tiles);
      generateRandomNumber(tiles);
    }

    // Move To Up
    function keyUp(){
      
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        KeyRight();
      }
      if (e.key === "ArrowLeft") {
        keyLeft();
      }
      if (e.key === "ArrowUp") {
        moveToUp(SIZE, tiles);
      }
    });
  });
}

main();
