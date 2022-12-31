const express = require('express')
const app = express()

//导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

//这是解析表单数据的中间件
app.use((req, res, next) => {
    //定义中间件的具体业务逻辑
    //1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
    let str = ''
    //2. 监听 req 的 data 事件
    req.on('data', (chunk) => {
        str += chunk
    })
    //3. 监听 req 的 end 事件
    req.on('end', () => {
        //在 str 中存放的是完整的请求体数据
        //console.log(str)
        //TODO: 把字符串格式的请求体数据，解析真对象格式
        const body = qs.parse(str)
        //console.log(body)
        req.body = body
        next()
    })
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () =>{
    console.log('http://localhost:80')
})