// class
import { Router } from "../modules/router.js"
// functions
import { general_requests } from "./request.js"
import { local_storage, history_path } from "../modules/utils.js"
// data
import { routes } from "../data/js/routes.js"
import { languages } from "../data/js/languages.js"


export async function create_MK() {
    // create Global Object MK
    window.MK = {}

    
    // create properties
    MK.languages = undefined

    MK.settings = {}
    MK.requests = {}
    MK.requests.general = undefined

    MK.router = undefined
    MK.history = undefined
    
    MK.add = undefined
    MK.local_storage = undefined


    // Getting data from HTML var (global)
    const data = window?.api_url

    
    // requests 
    MK.requests.general = general_requests(data)

    
    // start Class
    MK.router = new Router()
    MK.history = new history_path(location.host)


    // use data
    await MK.router.add_routes(routes)
    MK.languages = languages
    
    
    // delete data in HTML var (global)
    delete window.api_url
    
    // functions
    MK.local_storage = local_storage

    
    // function to add elements

}