import { generate_app, modify_html } from "./modules/html.js"
import header  from "../js/components/header.js"
import home from "./components/home.js"

export function layaout(language) {

    const app = new modify_html(generate_app())

    app.add_html(`
        <header>
            ${header(language)}
        </header>
        <main id="main">
            ${home(language)}
        </main>
        <footer></footer>
    `)

    // const main = new modify_html(document.getElementById('main'))



}