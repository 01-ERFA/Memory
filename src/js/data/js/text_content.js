import { tc_header } from "./text_content/header.js"
import { tc_footer } from "./text_content/footer.js"
import { tc_home } from "./text_content/home.js"


export const text_content = ()=>{

    return {
        header: tc_header,
        footer: tc_footer,

        home: tc_home,

        default: {
            local_storage_name: 'M_language',
            default_value_language: 'english', 
            title: 'Memory'
        }
}}
