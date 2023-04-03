import { generate_app, modify_html } from "./modules/html.js"
import header  from "../js/components/header.js"
import footer from "./components/footer.js"

export function layaout(language) {

    const app = new modify_html(generate_app())
    
    app.add_html(`
        <header>
            ${header(language)}
        </header>
        <main id="main">
        </main>
        <footer class='footer'>
            ${footer()}
        </footer>
    `)
        ?
            (()=>{
                const main = new modify_html(document.getElementById('main'))
                main.add_html(window.MK.router.load(location.pathname))
            })()
        :
            (()=>{
                console.log(false)
            })();

}