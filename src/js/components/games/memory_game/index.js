import { auto_select_language, create_board, hidden_footer } from "./data/modules.js";
import { get_imgs } from "./data/data.js";

const memory_game = ()=>{

    const path_game = 'src/js/components/games/memory_game'
    let language = auto_select_language(MK.settings.language)

    const cardsChosen = []
    const cardsChosenId = []
    const cardsWon = []

    let imgs_game = get_imgs('pokemons').concat(get_imgs('pokemons'))

    if (Array.isArray(imgs_game)) {
        imgs_game = shuffleArray(imgs_game, 3)
    }
    function shuffleArray(array, iterations = 2) {
        const len = array.length;
        for (let i = 0; i < iterations * len; i++) {
          const j = Math.floor(Math.random() * len);
          const k = Math.floor(Math.random() * len);
          [array[j], array[k]] = [array[k], array[j]];
        }
        return array;
      }

    

    function flip_card(params) {
        const cardID = this.getAttribute('data-id')
        const cardID_num = cardID.replace('mg_', '')

        if (cardID_num === cardsChosenId[0] || cardsWon.length === imgs_game.length/2) {
            return false;
        }
        cardsChosen.push(imgs_game[cardID_num].name)
        cardsChosenId.push(cardID_num)

        this.setAttribute('src', `${path_game}${imgs_game[cardID_num].img}`)



        if (cardsChosen.length === 2) {
            setTimeout(() => {
                const cards = document.querySelector('.mg').querySelector('#mg_grid').querySelectorAll('img')
                const result_display = document.querySelector('.mg').querySelector('#mg_result')
                const options_cards = {
                    one: cardsChosenId[0],
                    two: cardsChosenId[1],
                }

                if (cardsChosen[0] === cardsChosen[1]) {
                    cardsWon.push(cardsChosen)
                    
                } else {
                    cards[options_cards.one].setAttribute('src', `${path_game}/data/img/default_img.jpg`)
                    cards[options_cards.two].setAttribute('src', `${path_game}/data/img/default_img.jpg`)
                }

                cardsChosen.length = 0
                cardsChosenId.length = 0
                result_display.textContent = cardsWon.length

                if (cardsWon.length === cards.length/2) {
                    result_display.textContent = 'Congratulations! You found them all!'
                }
            
            }, 500);
        }


    }


    MK.requests.css.add(`${path_game}/data/styles.css`)
        ?null
        :null


    setTimeout(() => {
        hidden_footer()
     
        const grid = document.querySelector('.mg').querySelector('#mg_grid')
        
        create_board(grid, imgs_game, path_game, '/data/img/default_img.jpg', flip_card)
    });

    return `
        <div class='mg'>
            <h1>Memory Game</h1>
        
            <h3>Score: <span id='mg_result'>Start the game</span></h3> 
        
            <div id='mg_grid'></div>
        </div>
    `
}

export default memory_game