const BOARD_SIZE = 16;

export default class GameBoard {
  constructor(container) {
    this.container = container;
    this.cells = [];
  }

  draw() {
    for (let i = 0; i < BOARD_SIZE; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;
      this.container.append(cell);
      this.cells.push(cell);
    }
  }

  getCell(index) {
    return this.cells[index];
  }

  getRandomCellIndex(excludeIndex = null) {
    let index;

    do {
      index = Math.floor(Math.random() * this.cells.length);
    } while (index === excludeIndex);

    return index;
  }
}