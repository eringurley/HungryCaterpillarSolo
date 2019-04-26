import feedSushis from './feed-sushis.js';
const sushiButtons = document.querySelectorAll('.sushi');
const sushi = document.getElementById('sushi');

for(let i = 0; i < sushiButtons.length; i++) {
    const sushiButton = sushiButton [i];
    
    sushiButton.addEventListener('click', () => {
        feedSushis(sushiButton.value, sushi);
    });
} 