import '../css/style.css';
import Game from './Game';

const boardElement = document.getElementById('board');
const scoreElement = document.getElementById('score');
const missesElement = document.getElementById('misses');
const messageElement = document.getElementById('message');

const game = new Game(boardElement, scoreElement, missesElement, messageElement);

game.init();
game.start();