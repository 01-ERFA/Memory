export const local_storage = {
    get: (item)=>{
        if (localStorage.getItem(item) !== null) {
            return JSON.parse(localStorage.getItem(item))
        } else {
            return false
        }
    },
    post: (item, value)=>{
        try {
            localStorage.setItem(item, JSON.stringify(value))
            return true
        } catch (error) {
            return false
        }
    },
    delete: (item)=>{
        try {
            localStorage.removeItem(item)
            return true
        } catch (error) {
            return false
        }
    }
}

export class history_path {
    constructor(url) {
        this.url = url
    }

    save_history(title, path, time) {
        // save localStorage path
        if (typeof title === 'string' && typeof path === 'string' && typeof time === 'number') {
            const the_history = this.get_history_of_title(title, path)

            if (the_history !== false && typeof the_history === 'object' && the_history) {

                const get_history = this.get_history()

                if (get_history !== false && Array.isArray(get_history)) {
                    get_history[the_history.index] = {
                        title: title,
                        path: path,
                        time: get_history[the_history.index]?.time+time
                    }

                    local_storage.post('M_history', get_history)
                }


            } else {
                const get_history = this.get_history()
                if (get_history !== false && Array.isArray(get_history)) {
                    get_history.push({
                        title: title,
                        path: path,
                        time: time,
                    })
                    local_storage.post('M_history', get_history)
                } else {
                    local_storage.post('M_history', [])
                    this.save_history(title, path, time)
                }
            }

            return true
        }
        return false
    }

    get_history() {
        return local_storage.get('M_history')
    }

    get_history_of_title(title, path) {
        const history = local_storage.get('M_history')

        if (typeof title !== 'string' && typeof path !== 'string') {
            return false
        }

        if (history !== false && Array.isArray(history)) {
            let result = {}
            
            history.map((item, index)=>{
                if (typeof item === 'object' && !Array.isArray(item)) {
                    if (item?.title === title && item?.path === path) {
                        result.item = item
                        result.index = index
                    }
                }
            })
            
            result = typeof result.index !== 'number'?false:result
            return result
        }
        return false
    }
    
    change_path(new_path, title, time){
        this.save_history(title, new_path, time ??= 0)   
               
        history.pushState({}, title, new_path)
        local_storage.post('M_path', new_path)
    }

    redirect (){

    }
}   