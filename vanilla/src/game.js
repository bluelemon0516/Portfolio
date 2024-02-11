
const game = document.querySelector('.game_icon');
const game_bar = document.querySelector('.game_bar');
game.addEventListener('click', ()=> {
    game_bar.classList.remove('hidden');
})

// const bg = document.querySelector('body');
// game.addEventListener('click', ()=> {
//     game_bar.classList.add('hidden');
// })