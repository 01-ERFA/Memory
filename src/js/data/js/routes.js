import home from "../../components/home.js";
import list_games from "../../components/pages/list_games.js";

export const routes = [
    {
        path: '/',
        templante: home
    },
    {
        path: '/other',
        templante: ()=>{}
    },
    {
        path: '/games',
        templante: list_games
    }
]