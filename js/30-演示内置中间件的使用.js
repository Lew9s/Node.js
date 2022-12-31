const express = require('express');
const app = express();

//注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
//通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json());
//通过 express.urlencoded() 这个中间件，来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({extended: false}));

app.post('/', (req, res) => {
    //在服务器可以使用 req.body 这个属性来接受客户端发送过来的请求体数据
    //默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body)
    res.send('ok')
})

app.post('/book', (req, res) => {
    //在服务器端可以通过 req.body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://localhost:80')
})