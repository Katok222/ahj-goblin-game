export default class Goblin {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('goblin');
  }

  show(cell) {
    cell.append(this.element);
  }

  remove() {
    this.element.remove();
  }

  isClicked(target) {
    return target === this.element;
  }
}