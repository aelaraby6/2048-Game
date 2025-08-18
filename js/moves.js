/**
 * Rearranges a row or column by removing zeros and shifting numbers
 * depending on the given direction.
 *
 * @param {number[]} raw - The original row/column values
 * @param {string} direction - One of ["left", "right", "up", "down"]
 * @param {number} size - The size of the grid
 * @returns {number[]} - The shifted row/column with zeros added
 */

function shiftArray(raw, direction, size) {
  let filtered = raw.filter(Boolean);
  let zeros = Array(size - filtered.length).fill(0);

  if (direction === "left" || direction === "up") {
    return [...filtered, ...zeros];
  } else if (direction === "right" || direction === "down") {
    return [...zeros, ...filtered];
  }
}
/**
 * Updates a single row or column in the grid after a move
 *
 * @param {number[]} indices - List of indices representing the row/column positions in the grid
 * @param {HTMLElement[]} tiles - The full grid of tiles
 * @param {string} direction - The move direction ("left", "right", "up", "down")
 * @param {number} size - The grid size
 */

function updateLine(indices, tiles, direction, size) {
  let raw = indices.map((index) => parseInt(tiles[index].innerHTML));
  let shifted = shiftArray(raw, direction, size);

  indices.forEach((index, idx) => {
    tiles[index].innerHTML = shifted[idx];
  });
}

/**
 * Moves all tiles in the grid to a given direction
 *
 * @param {number} size - The size of the grid
 * @param {HTMLElement[]} tiles - Array of tile elements
 * @param {string} direction - One of ["left", "right", "up", "down"]
 */

export function moveTo(size, tiles, direction) {
  if (direction === "left" || direction === "right") {
    for (let i = 0; i < size * size; i += size) {
      let indices = [i, i + 1, i + 2, i + 3];
      updateLine(indices, tiles, direction, size);
    }
  } else if (direction === "up" || direction === "down") {
    for (let i = 0; i < size; i++) {
      let indices = [i, i + size, i + size * 2, i + size * 3];
      updateLine(indices, tiles, direction, size);
    }
  }
}
