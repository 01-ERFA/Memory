import { layaout } from "./code_flow.js"
import { languages } from "./data/web.js"
import { local_storage, history_path } from "./modules/utils.js"

import { Router, routes } from "./modules/router.js"




onload = ()=>{

    window.MK = {}
    MK.router = new Router()
    MK.router.add_routes(routes)


    MK.router.exist_route(location.pathname)
        ?(()=>{
            if (local_storage.get(languages.default.local_storage_name) === false) {
                local_storage.post(languages.default.local_storage_name, languages.default.default_value_language)
            }
        
            const path = new history_path(location.host)
            path.change_path(location.pathname, document.title)
        
            
            layaout(local_storage.get(languages.default.local_storage_name))

        })()
        :window.location.href = window.location.protocol + '//' + window.location.hostname;
}

