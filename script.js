// Global variable to alternate between 'X' and 'O'
let currentPlayer = 'X';

togglePlayerTurn();

// Function to handle hover effect
function handleHover(event) {
    const cell = event.target;
    if (!cell.textContent.trim()) {
        cell.textContent = currentPlayer;
        
    }
}

// Function to reset cell on mouse leave
function handleMouseLeave(event) {
    const cell = event.target;
    if (cell.dataset.locked !== 'true') {
        cell.textContent = '';
    }
}

// Function to lock cell content on click
function handleClick(event) {
    const cell = event.target;

    // If the cell is not already taken
    if (!cell.dataset.locked) {
        // Set the cell to the current player's mark
        cell.textContent = currentPlayer;
        cell.dataset.locked = 'true';

        // Switch current player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        // Toggle player turn
        togglePlayerTurn();
    }
}

function togglePlayerTurn() {
    const player1 = document.getElementById('player1Mark');
    const player2 = document.getElementById('player2Mark');

    if (currentPlayer === 'X') {
        player1.classList.add('active');
        player2.classList.remove('active');
    } else {
        player2.classList.add('active');
        player1.classList.remove('active');
    }
}

// Add event listeners to all cells
document.querySelectorAll('#subBoard td').forEach(cell => {
    cell.addEventListener('mouseover', handleHover);
    cell.addEventListener('mouseleave', handleMouseLeave);
    cell.addEventListener('click', handleClick);
});


