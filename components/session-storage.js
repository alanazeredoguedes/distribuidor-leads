const sessionStorage = {
    set(key, value){
        value ? window.localStorage[key] = value : this.remove(key)
        //return window.sessionStorage[key]
    },
    get(key, defaultValue = null){
        return window.localStorage[key] || defaultValue
    },
    setObject(key, value){
        window.localStorage[key] = JSON.stringify(value)
        return this.getObject(key)
    },
    getObject(key){
        return JSON.parse(window.localStorage[key] || null)
    },
    remove(key){
        window.localStorage.removeItem(key)
    }
}
export default sessionStorage