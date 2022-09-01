type IFormType='input'|'password'|'select'|'timepicker'
export interface IFormItem{
    type:IFormType,
    label:string,
    rules?:any[],
    placeholder:any,
    options?:any[]
}
export interface IForm{
    formItems:IFormItem[],
    labelWidth?:string,
    colLayout:any,
    itemStyle:any
}
