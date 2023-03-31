export class Router {
    constructor() {
        this._PATHS = []
    }

    add_routes(routes) {
        function validation_route(route) {
            if (typeof route?.path === 'string' && typeof route?.templante === 'function' ) {
                return true
            }
            return false
        }
        if (Array.isArray(routes)) {
            console.log(this._PATHS)
            routes.map((item)=>{
                validation_route(item)
                    ?this._PATHS.push(item)
                    :false
            })
            console.log(this._PATHS)

        }
        if (typeof routes === 'object' && !Array.isArray(routes)) {
            console.log(this._PATHS)
            validation_route(routes)
                ?this._PATHS.push(routes)
                :false
            console.log(this._PATHS)
            
        }
    }

    exist_route(path) {
        const { _PATHS } = this
        let result = false
        for (let index = 0; index < _PATHS.length; index++) { 
            if (path === _PATHS[index].path) {
                result = true
                break;
            }
        }
        return result
    }


    load(path = '/', error='**M&K_error**M&K_error') {
        const { _PATHS } = this

        let result = error
        for (let index = 0; index < _PATHS.length; index++) { 
            if (path === _PATHS[index].path) {
                result = _PATHS[index]
                break;
            }
        }

        if (result === '**M&K_error**M&K_error') {
            window.location.href = window.location.protocol + '//' + window.location.hostname;
        } else {
            try {
                return result.templante()
            } catch (error) {
                return false
            }
        }

        return false
    }
}

import home from "../components/home.js"
export const routes = [
    {
        path: '/',
        templante: home
    },
    {
        path: '/other',
        templante: ()=>{}
    }
]