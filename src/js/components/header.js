

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
        let events = []
        let html_result = []

        function add_event(id, link) {
            document.getElementById(id).addEventListener('click', ()=>{
                console.log(true);
            })

            document.getElementById(id).removeAttribute('id')
        }

        function load_the_result(array) {
            if (Array.isArray(array)) {
                array.map((item, index)=>{
                    events.push({
                        id: `add_event_navbar_${index}`,
                        link: item.link,
                    })
                    html_result.push(`
                        <li>
                            <button id='add_event_navbar_${index}'>
                                ${item.name}
                            </button>
                        </li>`
                    )
                })
            }
        }

        switch (language) {
            case 'english':
                if (Array.isArray(data.english.navbar)) {
                    load_the_result(data.english.navbar)
                } else if(typeof data.english.navbar === 'object' && !Array.isArray(data.english.navbar)){
                    load_the_result(Object.values(data.english.navbar))
                }
                break;
            case 'spanish':
                if (Array.isArray(data.spanish.navbar)) {
                    load_the_result(data.spanish.navbar)
                } else if(typeof data.spanish.navbar === 'object' && !Array.isArray(data.spanish.navbar)){
                    load_the_result(Object.values(data.spanish.navbar))
                }
                break;
                default:
                    return navbar('english', data)
                }
                
                
        setTimeout(() => {
            for (let index = 0; index < events.length; index++) {
                add_event(events[index].id, events[index].link)
            }
        });
        return html_result.join(' ')
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
    });

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