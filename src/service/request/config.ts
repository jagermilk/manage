let BASE_URL=''
let BASE_NAME=''
const TIME_OUT=10000

if(process.env.NODE_ENV==='development'){
    BASE_URL='http://localhost:3000'
    BASE_NAME='coderwhy'
}
if(process.env.NODE_ENV==='production'){
    BASE_URL='http://coderwhy.org/prod'
    BASE_NAME='kobe'
}
if(process.env.NODE_ENV==='test'){
    BASE_URL='http://coderwhy.org/test'
    BASE_NAME='james'
}
export {BASE_URL,BASE_NAME,TIME_OUT}