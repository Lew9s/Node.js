/* 
    案例实现步骤：
    1.创建两个正则表达式，分别用来匹配<style>标签和<script>标签
    2.使用 fs 模块，读取需要被处理的 HTML 文件
    3.自定义 resolveCSS 方法，来写入 index.css 样式文件
    4.自定义 resolveJS 方法，来写入 index.js 脚本文件
    5.自定义 resolveHTML 方法，来写入 index.html 文件
*/

//1.1 导入 fs 文件模块
const fs = require('fs')
//1.2 导入 path 路径处理模块
const path = require('path')

//1.3 匹配<style>标签的正则
const regStyle = /<style>[\s\S]*<\/style>/

//1.4 匹配<script>标签的正则
const regScript = /<script>[\s\S]*<\/script>/

//2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err,dataStr){
    //2.2 读取HTML文件失败
    if (err) {
        return console.log('读取HTML文件失败' + err.message)
    }

    //2.3 读取文件成功后，调用对应的三个方法，分别拆解出css，js，html文件
    //console.log('读取HTML文件成功')
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

//3.1 定义处理CSS样式的方法
function resolveCSS(htmlStr){
    //3.2 使用正则表达式的 exec 方法提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    //console.log(r1)

    //3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
    const newCSS = r1[0].replace('<style>','').replace("</style>",'')
    //console.log(newCSS)

    //3.4调用fs.writeFile() 方法，将提取的样式，写入到clock目录中 index.css 的文件里
    fs.writeFile(path.join(__dirname,'../files/clock/index.css'), newCSS, function(err){
        if(err){
            return console.log('写入CSS文件失败' + err.message)
        }
        //console.log('写入成功')
    })
}

//4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr){
    //4.2通过正则提取对应的<script></script>标签内容
    const r2 = regScript.exec(htmlStr)
    //console.log(r2)

    //4.3 将提取出来的内容进一步处理
    const newJS = r2[0].replace('<script>','').replace("</script>",'')
    
    //4.4 将处理结果写入clock的index.js文件中
    fs.writeFile(path.join(__dirname,'../files/clock/index.js'), newJS, function(err){
        if(err){
            return console.log('写入JS文件失败' + err.message)
        }
        //console.log('写入成功')
    })
}

//5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr){
    //5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr
    .replace(regStyle, "<link rel = 'stylesheet' href = './index.css' />")
    .replace(regScript, "<script src = './index.js'></script>")

    //5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, '../files/clock/index.html'), newHTML, function(err){
        if(err){
            return console.log('写入HTML文件失败' + err.message)
        }
        //console.log('写入成功')
    })
}