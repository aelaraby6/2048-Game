// Move To right
export function moveToRight(size, tiles) {
  for (let i = 0; i < size * size; i++) {
    if (i % 4 == 0) {
      let first = parseInt(tiles[i].innerHTML);
      let second = parseInt(tiles[i + 1].innerHTML);
      let third = parseInt(tiles[i + 2].innerHTML);
      let fourth = parseInt(tiles[i + 3].innerHTML);

      let raw = [first, second, third, fourth];

      let newRow = [
        ...Array(4 - raw.filter(Boolean).length).fill(0),
        ...raw.filter(Boolean),
      ];

      tiles[i].innerHTML = newRow[0];
      tiles[i + 1].innerHTML = newRow[1];
      tiles[i + 2].innerHTML = newRow[2];
      tiles[i + 3].innerHTML = newRow[3];
    }
  }
}

// Move To left
export function moveToLeft(size, tiles) {
  for (let i = 0; i < size * size; i++) {
    if (i % 4 == 0) {
      let first = parseInt(tiles[i].innerHTML);
      let second = parseInt(tiles[i + 1].innerHTML);
      let third = parseInt(tiles[i + 2].innerHTML);
      let fourth = parseInt(tiles[i + 3].innerHTML);

      let raw = [first, second, third, fourth];

      let newRow = [
        ...raw.filter(Boolean),
        ...Array(4 - raw.filter(Boolean).length).fill(0),
      ];

      tiles[i].innerHTML = newRow[0];
      tiles[i + 1].innerHTML = newRow[1];
      tiles[i + 2].innerHTML = newRow[2];
      tiles[i + 3].innerHTML = newRow[3];
    }
  }
}

// Move To Up
export function moveToUp(size, tiles) {
  for (let i = 0; i < size; i++) {
    let first = parseInt(tiles[i].innerHTML);
    let second = parseInt(tiles[i + size].innerHTML);
    let third = parseInt(tiles[i + size * 2].innerHTML);
    let fourth = parseInt(tiles[i + size * 3].innerHTML);

    let raw = [first, second, third, fourth];

    let newCol = [
      ...raw.filter(Boolean),
      ...Array(size - raw.filter(Boolean).length).fill(0),
    ];

    tiles[i].innerHTML = newCol[0];
    tiles[i + size].innerHTML = newCol[1];
    tiles[i + size * 2].innerHTML = newCol[2];
    tiles[i + size * 3].innerHTML = newCol[3];
  }
}

// Move To Down
export function moveToDown(size, tiles) {
  for (let i = 0; i < size; i++) {
    let first = parseInt(tiles[i].innerHTML);
    let second = parseInt(tiles[i + size].innerHTML);
    let third = parseInt(tiles[i + size * 2].innerHTML);
    let fourth = parseInt(tiles[i + size * 3].innerHTML);

    let raw = [first, second, third, fourth];

    let newCol = [
      ...Array(size - raw.filter(Boolean).length).fill(0),
      ...raw.filter(Boolean),
    ];

    tiles[i].innerHTML = newCol[0];
    tiles[i + size].innerHTML = newCol[1];
    tiles[i + size * 2].innerHTML = newCol[2];
    tiles[i + size * 3].innerHTML = newCol[3];
  }
}
