import { layaout } from "./code_flow.js"
import { create_MK } from "./events/MK_global_object.js"


onload = async()=>{

    // Global Object MK
    await create_MK()

    const languages = MK.languages()

    MK.router.exist_route(location.pathname)
        ?(()=>{
            if (MK.local_storage.get(languages.default.local_storage_name) === false) {
                MK.local_storage.post(languages.default.local_storage_name, languages.default.default_value_language)
            }
            
            MK.settings.language = MK.local_storage.get(languages.default.local_storage_name)

            MK.history.change_path(location.pathname, document.title)
            
            layaout()

        })()
        // :window.location.href = window.location.protocol + '//' + window.location.hostname;
        
        :null // 404 error
    }

