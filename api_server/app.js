const express = require('express');
const app = express();

const joi = require('joi');

const cors = require('cors');
app.use(cors());

// 解析表单数据中间件
app.use(express.urlencoded({extended: false}));

// 响应数据的中间件
app.use(function(req, res, next) {
    // status = 0 为成功， status = 1 为失败， 默认将 status 的值设为 1 ，方便处理失败的情况
    res.cc = function(err, status = 1){
        res.send({
            // 状态
            status,
            //状态描述，判断 err 是错误对象还是字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 定义错误级别中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if(err instanceof joi.ValidationError)  return res.cc(err)
    // 未知的错误
    res.cc(err)
})

app.listen(3007,() => {
    console.log('api server running at http://localhost:3007')
})