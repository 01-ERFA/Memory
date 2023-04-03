class api_request {
    constructor(api) {
        this.api = api
        this.xhr = new XMLHttpRequest() 
    }
    async send_request(method, route, type){
        return new Promise((resolve, reject) => {
            const { xhr } = this
            xhr.open(method, `${this.api}${route}`);
            xhr.responseType = type;
            
            xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject(false)
            }
            };
            xhr.onerror = function() {
                reject('false Error en la petición. No se pudo conectar al servidor.');
              };
            xhr.send();
        })
    }
}

export const general_requests = (api)=>{
    const request = new api_request(api)
    return {
        get_site: async ()=>{
            let result = undefined
            await request.send_request('GET', 'get_site', 'json')
                .then((response)=>result=response)
                .catch(()=>result=false)
            return result
        }


        // end return
    }
}