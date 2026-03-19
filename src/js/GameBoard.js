export default class GameBoard {
  constructor(container) {
    this.container = container;
    this.cells = [];
  }

  draw() {
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;
      this.container.appendChild(cell);
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