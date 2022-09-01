import {IForm} from '@/base-ui/form/types'
export const formConfig:IForm={
    labelWidth:'100px',
    itemStyle:{
        padding:'10px 40px'
    },
    colLayout:{
        xl:6,
        lg:8,
        md:12,
        sm:24,
        xs:24
    },
    formItems:[{
        type:'input',
        label:'用户名',
        rules:[],
        placeholder:'请输入用户名'
      },{
        type:'input',
        label:'年龄',
        rules:[],
        placeholder:'请输入年龄'
      },{
        type:'input',
        label:'籍贯',
        rules:[],
        placeholder:'请输入籍贯'
      },{
        type:'input',
        label:'密码',
        rules:[],
        placeholder:'请输入密码'
      },{
        type:'select',
        label:'喜欢的运动',
        rules:[],
        placeholder:'请输入喜欢的运动',
        options:[{title:'羽毛球',value:'volleyball'},{title:'足球',value:'football'}]
      },{
        type:'timepicker',
        label:'创建时间',
        rules:[],
        placeholder:'请输入创建时间'
      },
    
    ]
}