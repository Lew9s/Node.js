const express = require('express')
const app = express()

//1. 导入封装的中间件模块
const customBodyParser = require('./34-custom-body-paser')

//2. 将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser)

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () =>{
    console.log('http://localhost:80')
})