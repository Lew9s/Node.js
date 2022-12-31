const express = require('express');
const app = express();

//1. 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
//2. 使用 app.use() 注册中间件
app.use(parser.urlencoded({extended: false}));

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok')
})

app.listen(80,() => {
    console.log('http://localhost:80')
})