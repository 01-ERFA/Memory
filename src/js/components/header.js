

const header = (language = MK.settings.language, languages = MK.text_content())=>{

    function title(language, data) {
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

    function navbar(language, data) {
        let result = []
        switch (language) {
            case 'english':
                if (Array.isArray(data.english.navbar)) {
                    data.english.navbar.map((item)=>result.push(`<li>${item}</li>`))
                } else if(typeof data.english.navbar === 'object' && !Array.isArray(data.english.navbar)){
                    Object.values(data.english.navbar).map((item)=>result.push(`<li>${item.name}</li>`))
                }
                result = result.join(' ')
                return result
            case 'spanish':
                if (Array.isArray(data.spanish.navbar)) {
                    data.spanish.navbar.map((item)=>result.push(`<li>${item}</li>`))
                } else if(typeof data.spanish.navbar === 'object' && !Array.isArray(data.spanish.navbar)){
                    Object.values(data.spanish.navbar).map((item)=>result.push(`<li>${item.name}</li>`))
                }
                result = result.join(' ')
                return result
            default:
                return navbar('english', data)
        }


    }

    setTimeout(() => {
        
        const mobile_menu = document.getElementById('mobile-menu')
        const menu = document.querySelector('.navbar-primary').querySelector('ul')
        function button_mobile() {
            if (menu.style.transform === '') {
                menu.style.display = 'flex'
                menu.style.transform = 'unset'
                mobile_menu.style.display = 'none'
            } else {
                menu.style.display = ''
                menu.style.transform = ''
                mobile_menu.style.display = ''
            }
        }
        mobile_menu.addEventListener('click',()=>button_mobile())
        menu.querySelector('div').querySelector('button').addEventListener('click',()=>button_mobile())
    }, 200);

    return `
        <nav class="navbar-primary">
            <h1 class="title">
                ${title(language, languages.header)}
            </h1>
            <ul>
                <div>
                    <h3>Menu</h3>
                    <button>X</button>
                </div>
                ${navbar(language, languages.header)}
            </ul>
            <div id="mobile-menu">
                <button>
                    <hr class="hr" />
                    <hr class="hr" />
                    <hr class="hr" />
                </button>
            </div>
        </nav>
    `
}

export default header