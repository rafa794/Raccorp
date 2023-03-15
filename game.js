const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");
const btnLeft = document.querySelector("#left");
const spanLives = document.querySelector("#lives");
const spanTime = document.querySelector("#time");
const spanRecord = document.querySelector("#record");
const pResult = document.querySelector("#result");
const pReset = document.querySelector("#reset");

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;
let timePlayer;
let timeInterval;
let timeStart;
canvas.removeAttribute("#win");

const playerPosition = {
  x: undefined,
  y: undefined,
};

const giftPosition = {
  x: undefined,
  y: undefined,
};

let enemyPositions = {
  x: undefined,
  y: undefined,
};

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.7;
  } else {
    canvasSize = window.innerHeight * 0.7;
  }

  canvasSize = Number(canvasSize.toFixed(0));

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10;
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}
function startGame() {
  game.font = elementsSize + "px Verdana";
  game.textAlign = "end";

  const map = maps[level];

  if (!map) {
    gameWin();
    return;
  }

  if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100);
    showRecord();
  }

  const mapRows = map.trim().split("\n");
  const mapRowCols = mapRows.map((row) => row.trim().split(""));
  game.clearRect(0, 0, canvasSize, canvasSize);

  showLives();

  enemyPositions = [];
  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1.2);
      const posY = elementsSize * (rowI + 0.8);

      if (col == "O") {
        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
        }
      } else if (col == "P") {
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (col == "X") {
        enemyPositions.push({
          x: posX,
          y: posY,
        });
      }

      game.fillText(emoji, posX, posY);
    });
  });
  movePlayer();
}
function movePlayer() {
  const giftCollisionX =
    playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
  const giftCollisionY =
    playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
  const giftCollision = giftCollisionX && giftCollisionY;

  if (giftCollision) {
    levelWin();
  }

  const enemyCollision = enemyPositions.find((enemy) => {
    const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
    const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
    return enemyCollisionX && enemyCollisionY;
  });

  if (enemyCollision) {
    levelFail();
  }
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}
function levelWin() {
  console.log("Subiste de nivel");
  level++;
  startGame();
}
function gameWin() {
  clearInterval(timeInterval);

  const recordTime = localStorage.getItem("record_time");
  const playerTime = Date.now() - timeStart;
  if (recordTime) {
    const playerTime = Date.now() - timeStart;
    if (recordTime >= playerTime) {
      localStorage.setItem("record_time", playerTime);
      pResult.innerHTML = "Genial, rompiste el record😀";
      reiniciar();
    } else {
      pResult.innerHTML = "No superaste el récord 😢";
      reiniciar();
    }
  } else {
    localStorage.setItem("record_time", playerTime);
    pResult.innerHTML =
      "Felicidades, has ganado por primera vez, ahora intenta superar tu tiempo!";
    reiniciar();
  }
}
function reiniciar() {
  canvas.classList.add("win");
  var segundos = 5;
  var temporizador = setInterval(cuentaRegresiva, 1000);
  function cuentaRegresiva() {
    segundos--;
    if (segundos <= 0) {
      clearInterval(temporizador);
      location.reload();
    } else {
      pReset.innerHTML = `Reiniciando en: ${segundos}`;
    }
  }
}

function levelFail() {
  lives--;
  if (lives <= 0) {
    level = 0;
    lives = 3;
    timeStart = undefined;
  }
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}
function showLives() {
  const heartsArray = Array(lives).fill(emojis["HEART"]);
  spanLives.innerHTML = "";
  heartsArray.forEach((heart) => spanLives.append(heart));
}
function showRecord() {
  spanRecord.innerHTML = localStorage.getItem("record_time");
}
function showTime() {
  spanTime.innerHTML = Date.now() - timeStart;
}

window.addEventListener("keydown", moveByKeys);
btnUp.addEventListener("click", moveUp);
btnRight.addEventListener("click", moveRight);
btnDown.addEventListener("click", moveDown);
btnLeft.addEventListener("click", moveLeft);

function moveByKeys(event) {
  if (event.key == "ArrowUp") moveUp();
  else if (event.key == "ArrowRight") moveRight();
  else if (event.key == "ArrowDown") moveDown();
  else if (event.key == "ArrowLeft") moveLeft();
}
function moveUp() {
  if (playerPosition.y - elementsSize < 0) {
    console.log("Out");
  } else {
    playerPosition.y -= elementsSize;
    startGame();
  }
}
function moveRight() {
  if (playerPosition.x + elementsSize > canvasSize + elementsSize) {
    console.log("Out");
  } else {
    playerPosition.x += elementsSize;
    startGame();
  }
}
function moveDown() {
  if (playerPosition.y + elementsSize > canvasSize) {
    console.log("Out");
  } else {
    playerPosition.y += elementsSize;
    startGame();
  }
}
function moveLeft() {
  if (playerPosition.x - elementsSize < elementsSize) {
    console.log("Out");
  } else {
    playerPosition.x -= elementsSize;
    startGame();
  }
}
