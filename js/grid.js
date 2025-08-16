// 
export function createBoard(size, grid, tiles) {
  for (let i = 0; i < size * size; i++) {
    let tile = document.createElement("div");
    tile.innerHTML = 0;
    grid.appendChild(tile);
    tiles.push(tile);
  }
}

// Merge matching tiles to the right
export function combineRight(size, tiles, score, scoreDiv) {
  for (let row = 0; row < size; row++) {
    for (let col = size - 1; col > 0; col--) {
      let index = row * size + col;
      if (tiles[index].innerHTML === tiles[index - 1].innerHTML) {
        tiles[index].innerHTML =
          parseInt(tiles[index].innerHTML) +
          parseInt(tiles[index - 1].innerHTML);
        tiles[index - 1].innerHTML = 0;
        score += parseInt(tiles[index].innerHTML);
        scoreDiv.innerHTML = score;
      }
    }
  }
  return score;
}

// Merge matching tiles to the Left
export function combineLeft(size, tiles, score, scoreDiv) {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size - 1; col++) {
      let index = row * size + col;
      if (tiles[index].innerHTML === tiles[index + 1].innerHTML) {
        tiles[index].innerHTML =
          parseInt(tiles[index].innerHTML) +
          parseInt(tiles[index + 1].innerHTML);
        tiles[index + 1].innerHTML = 0;
        score += parseInt(tiles[index].innerHTML);
        scoreDiv.innerHTML = score;
      }
    }
  }
  return score;
}


