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