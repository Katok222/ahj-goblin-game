import '../css/style.css';
import Game from './Game';

const boardElement = document.getElementById('board');
const scoreElement = document.getElementById('score');
const missesElement = document.getElementById('misses');
const messageElement = document.getElementById('message');

if (!boardElement) {
  throw new Error('Element #board not found');
}

if (!scoreElement) {
  throw new Error('Element #score not found');
}

if (!missesElement) {
  throw new Error('Element #misses not found');
}

if (!messageElement) {
  throw new Error('Element #message not found');
}

const game = new Game(
  boardElement,
  scoreElement,
  missesElement,
  messageElement,
);

game.init();
game.start();