const home = ()=>{
    const languages = MK.text_content()

    function title(language, data){
        switch (language) {
            case 'english':
                if (typeof data.english.title === 'string') {
                    return data.english.title
                }
                break;
            case 'spanish':
                if (typeof data.spanish.title === 'string') {
                    return data.spanish.title
                } else {
                    return title('english', data)
                }
            default:
                return title('english', data)
        }
    }

    return `

        <div class='home'>
            <h1 class='title'>
                ${title(MK.settings.language, languages.home)}
            </h1>





        </div>
    
    `
}

export default home