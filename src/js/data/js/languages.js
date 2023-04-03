import { languages_header } from "./languages/header.js"
import { languages_home } from "./languages/home.js"
import { languages_footer } from "./languages/footer.js"
export const languages = ()=>{

    return {
        header: languages_header,
        footer: languages_footer,

        home: languages_home,

        default: {
            local_storage_name: 'M_language',
            default_value_language: 'english'
        }
}}
