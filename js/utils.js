// Place a 2 in a random empty tile
export function generateRandomNumber(tiles) {
  let emptyTiles = tiles.filter((tile) => tile.innerHTML == 0);

  if (emptyTiles.length > 0) {
    let random = Math.floor(Math.random() * emptyTiles.length);

    emptyTiles[random].innerHTML = 2;
  }
}

export function addColours(tiles) {
  for (let i = 0; i < tiles.length; i++) {
    let value = parseInt(tiles[i].innerHTML);
    switch (value) {
      case 0:
        tiles[i].style.backgroundColor = "#afa192";
        break;
      case 2:
        tiles[i].style.backgroundColor = "#eee4da";
        tiles[i].style.color = "#afa192";
        break;
      case 4:
        tiles[i].style.backgroundColor = "#ede0c8";
        tiles[i].style.color = "#afa192";
        break;
      case 8:
        tiles[i].style.backgroundColor = "#f2b179";
        tiles[i].style.color = "#f9f6f2";
        break;
      case 16:
        tiles[i].style.backgroundColor = "#f59563";
        tiles[i].style.color = "#f9f6f2";
        break;
      case 32:
        tiles[i].style.backgroundColor = "#f67c5f";
        tiles[i].style.color = "#f9f6f2";
        break;
      case 64:
        tiles[i].style.backgroundColor = "#f65e3b";
        tiles[i].style.color = "#f9f6f2";
        break;
      case 128:
        tiles[i].style.backgroundColor = "#edcf72";
        tiles[i].style.color = "#f9f6f2";
        break;
      case 256:
        tiles[i].style.backgroundColor = "#edcc61";
        tiles[i].style.color = "#f9f6f2";
        break;
      case 512:
        tiles[i].style.backgroundColor = "#edc850";
        tiles[i].style.color = "#f9f6f2";
        break;
      case 1024:
        tiles[i].style.backgroundColor = "#edc53f";
        tiles[i].style.color = "#f9f6f2";
        break;
      case 2048:
        tiles[i].style.backgroundColor = "#edc22e";
        tiles[i].style.color = "#f9f6f2";
        break;
      default:
        tiles[i].style.backgroundColor = "#3c3a32";
        tiles[i].style.color = "#f9f6f2";
    }
  }
}

export function reset(tiles) {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].innerHTML = 0;
  }
}
