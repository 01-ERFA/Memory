import { home_screen, game_screen, result_screen } from "./data/game_flow.js";
import { auto_select_language } from "./data/modules.js";

const memory_game = ()=>{


    const path_game = 'src/js/components/games/memory_game'
    const language = auto_select_language(MK.settings.language)

    MK.requests.css.add(`${path_game}/data/styles.css`)
        ?null
        :null


    setTimeout(() => {
        document.querySelector('footer').style.display = 'none'

        home_screen(document.querySelector('.mg'), language, path_game)

    });

    return `
        <h1 class='mg_h1'>Memory Game</h1>
        <div class='mg'></div>
        <br />
    `
}

export default memory_game