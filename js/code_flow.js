import { generate_app, modify_html } from "./modules/html.js"
import header  from "../js/components/header.js"

export function layaout(language) {

    const app = new modify_html(generate_app())

    app.add_html(`
        <header id="header">
            ${header(language)}
        </header>
        <main id="main"></main>
        <footer id="footer"></footer>
    `)

    // const main = new modify_html(document.getElementById('main'))



}