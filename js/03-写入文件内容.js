//1.导入 fs 文件系统模块
const fs = require('fs');
//2.调用 fs.writeFile() 方法，写入文件的内容
//  参数1：表示文件的存放路径
//  参数2：表示要写入的内容
//  参数3：可选参数，表示文件编码格式，默认utf-8
//  参数4：回调函数
fs.writeFile('../files/2.txt', 'abcd',function(err) {
    //如果文件写入成功，则 err 的值为null
    //如果文件写入失败，则 err 的值为一个错误对象
    console.log(err);
});