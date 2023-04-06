

export const get_imgs = (imgs = '')=>{
    if (typeof imgs !== 'string') {
        return false
    }
    const path = '/data/img'
    switch (imgs) {
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