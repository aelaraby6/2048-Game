// Place a 2 in a random empty tile
export function generateRandomNumber(tiles) {
  let random = Math.floor(Math.random() * tiles.length);

  if (tiles[random].innerHTML == 0) {
    tiles[random].innerHTML = 2;
  } else {
    generateRandomNumber(tiles);
  }
}
