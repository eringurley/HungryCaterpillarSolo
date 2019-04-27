import feedSushis from './feed-sushis.js';
const sushiButtons = document.querySelectorAll('.sushi');
console.log(sushiButtons);
// const gimbap = document.getElementById('gimbap');
// const roe = document.getElementById('roe');
// const salshimi = document.getElementById('salshimi');
// const salmon = document.getElementById('salmon');
// const tuna = document.getElementById('tuna');
const girl = document.getElementById('girl');



for(let i = 0; i < sushiButtons.length; i++) {
    const sushiButton = sushiButtons[i];
    
    sushiButton.addEventListener('click', () => {
        feedSushis(sushiButton.value, girl);
    });

} 