const footer = ()=>{

    const languages = MK.languages().footer
    console.log(languages)

    function thx_span(language, data) {
        try {
            if (data[language].message_thank !== undefined || data[language].message_thank !== null) {
                return data[language].message_thank
            } else {
                return data['english'].message_thank            
            }
        } catch {
            return data['english'].message_thank 
        }
    }
    function repository(language, data) {
        try {
            if (data[language].message_repository !== undefined || data[language].message_repository !== null) {
                return data[language].message_repository
            } else {
                return data['english'].message_repository            
            }
        } catch {
            return data['english'].message_repository 
        }
    }

    return `
        <span>${thx_span(MK.settings.language, languages)}</span>
        <a href='https://github.com/01-ERFA/Memory/' target='_blank'>
            ${repository(MK.settings.language, languages)}
        </a>
    `
}

export default footer