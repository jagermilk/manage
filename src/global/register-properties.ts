import {App} from 'vue'
import {formatUtcString} from '@/utils/data-format'
export default function registerProperties(app:App){
    app.config.globalProperties.$filters={
        foo(){
            console.log(111)
        },
        formatTime(value:string){
            return formatUtcString(value)
        }

    }
}