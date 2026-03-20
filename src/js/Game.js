import GameBoard from './GameBoard';
import Goblin from './Goblin';

const MAX_MISSES = 5;
const GOBLIN_INTERVAL_MS = 1000;

export default class Game {
  constructor(boardContainer, scoreElement, missesElement, messageElement) {
    this.boardContainer = boardContainer;
    this.scoreElement = scoreElement;
    this.missesElement = missesElement;
    this.messageElement = messageElement;

    this.score = 0;
    this.misses = 0;
    this.currentCellIndex = null;
    this.isHit = false;
    this.intervalId = null;

    this.board = new GameBoard(this.boardContainer);
    this.goblin = new Goblin();

    this.onBoardClick = this.onBoardClick.bind(this);
  }

  init() {
    this.board.draw();
    this.updateScore();
    this.updateMisses();
    this.bindEvents();
  }

  bindEvents() {
    this.boardContainer.addEventListener('click', this.onBoardClick);
  }

  onBoardClick(event) {
    if (this.goblin.isClicked(event.target)) {
      this.score += 1;
      this.isHit = true;
      this.goblin.remove();
      this.updateScore();
    }
  }

  start() {
    this.showGoblin();

    this.intervalId = setInterval(() => {
      if (!this.isHit && this.currentCellIndex !== null) {
        this.misses += 1;
        this.updateMisses();
      }

      if (this.misses >= MAX_MISSES) {
        this.finishGame();
        return;
      }

      this.showGoblin();
    }, GOBLIN_INTERVAL_MS);
  }

  showGoblin() {
    const randomIndex = this.board.getRandomCellIndex(this.currentCellIndex);
    this.currentCellIndex = randomIndex;
    this.isHit = false;

    const cell = this.board.getCell(randomIndex);
    this.goblin.show(cell);
  }

  updateScore() {
    this.scoreElement.textContent = this.score;
  }

  updateMisses() {
    this.missesElement.textContent = this.misses;
  }

  finishGame() {
    clearInterval(this.intervalId);
    this.boardContainer.removeEventListener('click', this.onBoardClick);
    this.goblin.remove();
    this.messageElement.textContent = 'Игра окончена!';
  }
}