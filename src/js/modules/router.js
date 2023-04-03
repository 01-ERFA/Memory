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
            routes.map((item)=>{
                validation_route(item)
                    ?this._PATHS.push(item)
                    :false
            })

        }
        if (typeof routes === 'object' && !Array.isArray(routes)) {
            validation_route(routes)
                ?this._PATHS.push(routes)
                :false
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
