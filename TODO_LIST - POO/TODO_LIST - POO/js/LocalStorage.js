class LocalStroage {


    static update(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static findAll(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    static deleteAll(key){
        localStorage.removeItem(key)
    }


}

export default LocalStroage