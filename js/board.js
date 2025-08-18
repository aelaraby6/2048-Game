// create tiles on board
export function createBoard(size, grid, tiles) {
  for (let i = 0; i < size * size; i++) {
    let tile = document.createElement("div");
    tile.innerHTML = 0;
    grid.appendChild(tile);
    tiles.push(tile);
  }
}

function mergeTiles(i, j, tiles, Score, scoreDiv) {
  let combinedTotal =
    parseInt(tiles[i].innerHTML) + parseInt(tiles[j].innerHTML);

  tiles[i].innerHTML = combinedTotal;
  tiles[j].innerHTML = 0;

  Score += combinedTotal;
  scoreDiv.innerHTML = Score;

  return Score;
}

// Merge matching tiles in row
export function combineRow(SIZE, tiles, Score, scoreDiv, direction) {
  let step = direction === "left" ? 1 : -1;
  let start = direction === "left" ? 0 : SIZE - 1;
  let end = direction === "left" ? SIZE - 1 : 0;

  for (let row = 0; row < SIZE; row++) {
    for (let col = start; col !== end; col += step) {
      let i = row * SIZE + col;
      let next = row * SIZE + (col + step);

      if (
        tiles[i].innerHTML !== "" &&
        tiles[i].innerHTML === tiles[next].innerHTML
      ) {
        Score = mergeTiles(i, next, tiles, Score, scoreDiv);
      }
    }
  }
  return Score;
}

export function combineColumn(SIZE, tiles, Score, scoreDiv, direction) {
  let step = direction === "up" ? 1 : -1;
  let start = direction === "up" ? 0 : SIZE - 1;
  let end = direction === "up" ? SIZE - 1 : 0;

  for (let col = 0; col < SIZE; col++) {
    for (let row = start; row !== end; row += step) {
      let i = row * SIZE + col;
      let next = (row + step) * SIZE + col;

      if (
        tiles[i].innerHTML !== "" &&
        tiles[i].innerHTML === tiles[next].innerHTML
      ) {
        Score = mergeTiles(i, next, tiles, Score, scoreDiv);
      }
    }
  }
  return Score;
}

// check if player wins
export function checkWin(tiles, result, intervalId, handleKey) {
  for (let i = 0; i < tiles.length; i++) {
    if (parseInt(tiles[i].innerHTML) === 2048) {
      result.innerHTML = "You Win! 🎉";
      document.removeEventListener("keydown", handleKey);
      clearInterval(intervalId);
      return true;
    }
  }
  return false;
}

// check if player loses
export function checkLose(tiles, size, result, intervalId, handleKey) {
  for (let i = 0; i < tiles.length; i++) {
    if (
      parseInt(tiles[i].innerHTML) === 0 ||
      isNaN(parseInt(tiles[i].innerHTML))
    ) {
      return false;
    }
  }

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      let index = row * size + col;
      let current = parseInt(tiles[index].innerHTML);

      // check right
      if (col < size - 1) {
        let right = parseInt(tiles[index + 1].innerHTML);
        if (current === right) return false;
      }

      // check down
      if (row < size - 1) {
        let down = parseInt(tiles[index + size].innerHTML);
        if (current === down) return false;
      }
    }
  }

  result.innerHTML = "Game Over! 💀";
  document.removeEventListener("keydown", handleKey);
  clearInterval(intervalId);
  return true;
}
