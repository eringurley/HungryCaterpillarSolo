import feedSushis from './feed-sushis.js';
const sushiButtons = document.querySelectorAll('.sushi');
const girl = document.getElementById('girl');

for(let i = 0; i < sushiButtons.length; i++) {
    const sushiButton = sushiButtons[i];
    
    sushiButton.addEventListener('click', () => {
        feedSushis(sushiButton.value, girl);
    });

} 