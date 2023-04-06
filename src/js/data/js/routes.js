import home from "../../components/home.js";
import list_games from "../../components/pages/list_games.js";

import memory_game from "../../components/games/memory_game/index.js"

export const routes = [
    {
        path: '/',
        templante: home
    },
    {
        path: '/settings',
        templante: ()=>{}
    },
    {
        path: '/games',
        templante: list_games
    },
    {
        path: '/test',
        templante: memory_game
    }
]