const express = require('express');
const app = express();

//1. 导入路由模块
const router = require('./23-router');
//2. 注册路由模块
app.use(router)

//注意： app.use() 函数的作用，就是用来注册全局中间件

app.listen(80,() => {
    console.log('http://localhost:80')
})