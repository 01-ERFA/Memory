import { languages_header } from "./languages/header.js"
import { languages_home } from "./languages/home.js"
export const languages = ()=>{

    return {
        header: languages_header,

        home: languages_home,

        default: {
            local_storage_name: 'M_language',
            default_value_language: 'english'
        }
}}
