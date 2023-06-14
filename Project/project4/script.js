// Game constants
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 40;
const PLAYER_SPEED = 5;
const BULLET_RADIUS = 5;
const BULLET_SPEED = 10;
const ENEMY_WIDTH = 30;
const ENEMY_HEIGHT = 30;
const ENEMY_SPEED = 2;

// Game variables
let canvas, ctx;
let playerX, playerY;
let bullets, enemies;

// Initialize the game
function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    playerX = CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2;
    playerY = CANVAS_HEIGHT - PLAYER_HEIGHT - 10;
    bullets = [];
    enemies = [];

    // Add event listeners for player movement and shooting
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleSpacebar);

    // Start game loop
    setInterval(gameLoop, 16); // 60 FPS
}

// Update game logic
function update() {
    // Update player position based on key states
    if (keyStates['ArrowLeft'] && playerX > 0) {
        playerX -= PLAYER_SPEED;
    }
    if (keyStates['ArrowRight'] && playerX < CANVAS_WIDTH - PLAYER_WIDTH) {
        playerX += PLAYER_SPEED;
    }

    // Update bullet positions
    bullets.forEach(bullet => {
        bullet.y -= BULLET_SPEED;
    });

    // Check for bullet-enemy collision
    bullets.forEach((bullet, bulletIndex) => {
        enemies.forEach((enemy, enemyIndex) => {
            if (isColliding(bullet, enemy)) {
                // Remove collided bullet and enemy
                bullets.splice(bulletIndex, 1);
                enemies.splice(enemyIndex, 1);
            }
        });
    });

    // Update enemy positions
    enemies.forEach(enemy => {
        enemy.y += ENEMY_SPEED;
    });
}

// Render game elements
function render() {
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw player
    ctx.fillStyle = 'blue';
    ctx.fillRect(playerX, playerY, PLAYER_WIDTH, PLAYER_HEIGHT);

    // Draw bullets
    ctx.fillStyle = 'red';
    bullets.forEach(bullet => {
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, BULLET_RADIUS, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    });

    // Draw enemies
    ctx.fillStyle = 'green';
    enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, ENEMY_WIDTH, ENEMY_HEIGHT);
    });
}

// Game loop
function gameLoop() {
    update();
    render();
}

// Keyboard input handling
let keyStates = {};

function handleKeyDown(event) {
    keyStates[event.key] = true;
}

function handleKeyUp(event) {
    keyStates[event.key] = false;
}

function handleSpacebar(event) {
    if (event.key === ' ') {
        // Create a new bullet at player position
        let bullet = {
            x: playerX + PLAYER_WIDTH / 2,
            y: playerY
        };
        bullets.push(bullet);
    }
}

// Collision detection function
function isColliding(obj1, obj2) {
    if (
        obj1.x < obj2.x + ENEMY_WIDTH &&
        obj1.x + BULLET_RADIUS * 2 > obj2.x &&
        obj1.y < obj2.y + ENEMY_HEIGHT &&
        obj1.y + BULLET_RADIUS * 2 > obj2.y
    ) {
        return true;
    }
    return false;
}

// Start the game
init();
