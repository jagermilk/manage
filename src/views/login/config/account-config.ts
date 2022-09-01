export const rules={
    name:[{
        required:true,
        message:'不许为空',
        trigger:'blur'
    },
    {
        pattern:/^[a-z0-9]{5,10}$/,
        message:'必须是5-10个字母或数字'
    }
    ],
    number:[{
        required:true,
        message:'不许为空',
        trigger:'blur'
    },
    {
        pattern:/^[0-9]{11,11}$/,
        message:'必须是11个数字'

    }
    ],
    password:[{
        required:true,
        message:'不许为空',
        trigger:'blur'
    },
    {
        pattern:/^[a-z0-9]{3,10}$/,
        message:'必须是3位以上的字母或数字'
    }
    ],
    vcode:[{
        required:true,
        message:'不许为空',
        trigger:'blur'
    },
    {
        pattern:/^[0-9]{4,4}$/,
        message:'必须是4位数字'
    }
    ]
}