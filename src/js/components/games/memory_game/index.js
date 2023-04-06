import { auto_select_language } from "./data/modules.js";

const memory_game = ()=>{

    let language = auto_select_language(MK.settings.language)

    MK.requests.css.add('src/js/components/games/memory_game/data/styles.css')
        ?console.log(true)
        :console.log(false)

    return `
    
    <h1>Memory Game</h1>
    
    `
}

export default memory_game