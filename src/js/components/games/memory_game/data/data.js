

export const get_imgs = (imgs = '')=>{
    if (typeof imgs !== 'string') {
        return false
    }
    const path = '/data/img'
    switch (imgs) {
        case 'select':
            const ps = `${path}/select`
            const options_select = [
                {
                    name: 'pokemons',
                    img: `${ps}/pokemon-0.jpg`
                },
                {
                    name: 'bleach',
                    img: `${ps}/bleach-0.jpg`
                }
            ]
            return options_select
        case 'pokemons':
            const pp = `${path}/pokemons`
            const card_array = [
                {
                    name: 'arbok',
                    img: `${pp}/arbok.png`
                },
                {
                    name: 'articuno',
                    img: `${pp}/articuno.png`
                },
                {
                    name: 'eevee',
                    img: `${pp}/eevee.png`
                },
            ]
            return card_array
    
        default:
            return false
    }
}