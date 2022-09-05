import hyRequest from "..";
export function getlistRequest(obj:any){
    return hyRequest.get({
        url:obj.url,
        params:obj.params
    })
}