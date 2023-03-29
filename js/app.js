import { layaout } from "./code_flow.js"
import { languages, data_history } from "./data/web.js"
import { local_storage, history_path } from "./modules/utils.js"

onload = ()=>{
    
        if (local_storage.get(languages.default.local_storage_name) === false) {
            local_storage.post(languages.default.local_storage_name, languages.default.default_value_language)
        }

    
    const path = new history_path(window.location.href.replace(window.location.pathname, ''))
    path.change_path(data_history.default.path, data_history.default.title)

    
    layaout(local_storage.get(languages.default.local_storage_name))
}

