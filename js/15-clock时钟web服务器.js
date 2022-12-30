//1.1 导入 fs 模块
const fs = require('fs');
//1.2 导入 path 模块
const path = require('path');
//1.3 导入 http 模块
const http = require('http');

//2.1 创建 web 服务器
const server = http.createServer();
//2.2 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
    //3.1 获取到客户端请求的 URL 地址
    //    /clock/index.html
    const url = req.url
    //3.2 把请求的 URL 地址映射为具体文件的存放路径
    //const fpath = path.join(__dirname, '../files', url)

    //*** 将3.2代码优化如下 ***
    //5.1 预定义空白的文件存放路径
    let fpath = ''
    if(url === '/'){
        //5.2 如果请求的路径是 / ，则手动指定文件的存放路径
        fpath = path.join(__dirname, '../files/clock/index.html')
    }else{
        //5.3 如果请求的路径不为 / ，则动态拼接文件的存放路径
        //    /index.html
        fpath = path.join(__dirname, '../files/clock', url)
    }

    //4.1 根据“映射”过来的文件路径读取文件的内容
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        //4.2 读取失败，向客户端响应固定的“错误消息”
        if(err) return res.end('404 Not Found')
        //4.3 读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)
    })
})
//2.3 启动服务器
server.listen(80,() => {
    console.log('server running at http://localhost')
})