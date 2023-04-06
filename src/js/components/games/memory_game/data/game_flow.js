import { create_board } from "./modules.js";
import { get_imgs } from "./data.js";

export const home_screen = (body = document.body, language = 'english', path_game)=>{

    // game_screen(document.querySelector('.mg'), language, path_game, 'pokemons')

    const settings = {
        language: language,
        imgs: undefined,
        size: undefined
    }
    
    function btn_play() {

        const imgs = get_imgs('select')
        let current_img = 0

        body.innerHTML = `<div class='content'>`

        body.querySelector(`.content`).innerHTML = `
        
            <img src='${path_game}${imgs[current_img].img}' style='width: 200px;height: 200px'/>

            <div class='select_data'>
                <button> < </button>
                <button> > </button>
            </div>
        `

        const buttons = body.querySelector(`.content`).querySelector(`.select_data`).querySelectorAll(`button`)
        const img = body.querySelector(`.content`).querySelector(`img`)
        buttons[0].addEventListener('click', ()=>{
            if (current_img === 0) {
                current_img = imgs.length-1
                img.setAttribute('src', `${path_game}${imgs[current_img].img}`)
            } else {
                current_img--
                img.setAttribute('src', `${path_game}${imgs[current_img].img}`)
            }
        })
        buttons[1].addEventListener('click', ()=>{
            if (imgs.length-1 === current_img) {
                current_img = 0
                img.setAttribute('src', `${path_game}${imgs[current_img].img}`)
            } else {
                current_img++
                img.setAttribute('src', `${path_game}${imgs[current_img].img}`)
            }
        })
        img.addEventListener('click', ()=>{
            game_screen(
                // body.querySelector('.content'),
                body, 
                language, 
                path_game, 
                imgs[current_img].name
                )
        })
    }

    setTimeout(() => {
        body.innerHTML = `
        
            <div class='content'>
                <button class='btn_play'>Play</button>
            </div>
        `

        body.querySelector('.content').querySelector('.btn_play').addEventListener('click', btn_play)

        // add events
    });

    return true
}


export function game_screen (body = document.body, language = 'english', path_game, image_category){

    const cardsChosen = []
    const cardsChosenId = []
    const cardsWon = []

    let imgs_game = get_imgs(image_category).concat(get_imgs(image_category))

    function shuffleArray(array, iterations = 2) {
        const len = array.length;
        for (let i = 0; i < iterations * len; i++) {
          const j = Math.floor(Math.random() * len);
          const k = Math.floor(Math.random() * len);
          [array[j], array[k]] = [array[k], array[j]];
        }
        return array;
    }

    function flip_card() {
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
                    result_display.textContent = 'Congratulations!'
                }
            
            }, 500);
        }
    }

    if (Array.isArray(imgs_game)) {
        imgs_game = shuffleArray(imgs_game, 3)
    }

    setTimeout(() => {
        // create dom elements
        
        body.innerHTML = `` // clean
        
        body.innerHTML = `
        
            <h3>Score: <span id='mg_result'>Start the game</span></h3> 
        
            <div id='mg_grid'></div>
        `

        const grid = document.querySelector('.mg').querySelector('#mg_grid')

        create_board(grid, imgs_game, path_game, '/data/img/default_img.jpg', flip_card)
    });

    return true

}

export const result_screen = ()=>{
    return true
}