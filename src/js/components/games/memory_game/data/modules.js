export function auto_select_language(language = 'english') {
    if (typeof language === 'string') {
        const game_language = ['english', 'spanish', 'test']
        for (let index = 0; index < game_language.length; index++) {
            if (game_language[index] === language) {
                return language
            } else{
                return auto_select_language()
            }
        }
    }else {
        return auto_select_language()
    }
}

export function create_board(grid, cards, path_game, default_img, event, size) {
    if (Array.isArray(cards)) {
        for (let index = 0; index < cards.length; index++) {
            let card = document.createElement('img')
            card.setAttribute('src', `${path_game}${default_img}`)
            card.setAttribute('data-id', `mg_${index}`)
            card.addEventListener('click', event)
            if (document.contains(grid)) {
                grid.appendChild(card)
            }
        }
    }
}

export function change_screen (screen = ()=>{}){
    if (typeof screen === 'function') {
        screen()
    }
}