class LocalCache{
    setCache(key:string,value:any){
        if(value){
          window.localStorage.setItem(key,JSON.stringify(value))  
        }
        else{
            window.localStorage.setItem(key,value)
        }
    }
    getCache(key:string){
        const value= window.localStorage.getItem(key)
        if(value){
            return JSON.parse(value)
        }
        else{
            return value
        }
    }
    deleteCache(key:string){
        window.localStorage.removeItem(key)
    }
    clearCache(){
        window.localStorage.clear()
    }
}//类具有更强的封装性
export default new LocalCache()