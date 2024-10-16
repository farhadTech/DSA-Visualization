const mazeContainer = document.getElementById('maze');
const mazeSize = 10; // 10x10 grid
let maze = [];
let playerPosition = { x: 0, y: 0 };

// Initialize maze with walls and paths
function initializeMaze() {
  for (let i = 0; i < mazeSize; i++) {
    maze[i] = [];
    for (let j = 0; j < mazeSize; j++) {
      maze[i][j] = Math.random() < 0.3 ? 1 : 0; // 30% chance of wall
    }
  }
  maze[0][0] = 0; // Start point
  maze[mazeSize - 1][mazeSize - 1] = 0; // Exit point
}

// Render maze grid
function renderMaze() {
  mazeContainer.innerHTML = '';
  mazeContainer.style.gridTemplateColumns = `repeat(${mazeSize}, 40px)`;

  for (let i = 0; i < mazeSize; i++) {
    for (let j = 0; j < mazeSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (maze[i][j] === 1) {
        cell.classList.add('wall');
      } else if (i === playerPosition.x && j === playerPosition.y) {
        cell.classList.add('player');
      } else if (i === mazeSize - 1 && j === mazeSize - 1) {
        cell.classList.add('exit');
      } else {
        cell.classList.add('path');
      }
      mazeContainer.appendChild(cell);
    }
  }
}

// Check if a move is valid (not a wall and within bounds)
function isValidMove(x, y) {
  return x >= 0 && x < mazeSize && y >= 0 && y < mazeSize && maze[x][y] === 0;
}

// Handle player movement with arrow keys
document.addEventListener('keydown', (e) => {
  let { x, y } = playerPosition;
  switch (e.key) {
    case 'ArrowUp':
      if (isValidMove(x - 1, y)) playerPosition.x--;
      break;
    case 'ArrowDown':
      if (isValidMove(x + 1, y)) playerPosition.x++;
      break;
    case 'ArrowLeft':
      if (isValidMove(x, y - 1)) playerPosition.y--;
      break;
    case 'ArrowRight':
      if (isValidMove(x, y + 1)) playerPosition.y++;
      break;
  }
  renderMaze();
  checkWin();
});

// Check if the player reached the exit
function checkWin() {
  if (playerPosition.x === mazeSize - 1 && playerPosition.y === mazeSize - 1) {
    alert('You win!');
    resetGame();
  }
}

// Reset the game
function resetGame() {
  playerPosition = { x: 0, y: 0 };
  initializeMaze();
  renderMaze();
}

// Initialize the game
initializeMaze();
renderMaze();
