const express = require('express');
const app = express();

//挂载路由
app.get('/', function(req, res){
    res.send('hello world')
})

app.post('/', (req, res) => {
    res.send('Post request')
})

app.listen(80,() => {
    console.log('http://localhost:80')
})