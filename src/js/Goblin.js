export default class Goblin {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('goblin');
  }

  show(cell) {
    cell.appendChild(this.element);
  }

  remove() {
    if (this.element.parentElement) {
      this.element.parentElement.removeChild(this.element);
    }
  }

  isClicked(target) {
    return target === this.element;
  }
}