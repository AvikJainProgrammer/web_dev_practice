const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Adjust for more or fewer pairs
const cards = [...symbols, ...symbols]; // Double up to make pairs
let flippedCards = [];
let matchedPairs = 0;

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    
    // Shuffle cards
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Create cards
    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<div class="front">${symbol}</div><div class="back"></div>`;
        card.dataset.symbol = symbol;
        
        card.addEventListener('click', () => {
            if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
                card.classList.add('flipped');
                flippedCards.push(card);
                
                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 1000);
                }
            }
        });

        board.appendChild(card);
    });
});

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === symbols.length) {
            alert('You won the game!');
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
    }
}