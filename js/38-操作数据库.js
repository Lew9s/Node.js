//1. 导入 mysql 模块
const mysql = require('mysql');
//2. 建立与 MYSQL 数据库的连接关系
const db = mysql.createPool({
    host: 'localhost',  //数据库的 ip 地址
    user: 'root',  //登录账号
    password: 'admin245774',  //登录密码
    database: 'my_db_01'  //要连接的数据库名称
})

/* // 测试 mysql 模块能否正常工作
db.query('select 1', (err, results) => {
    if(err) return console.log(err.message)
    console.log(results)
}) */

// 查询 users 表中的所有信息
db.query('select * from users', (err, results) => {
    if(err) return console.log(err.message)
    console.log(results)
    //注意：如果执行的是 select 查询语句，则执行的结果是数组
})

/* // 向 users 表中插入数据
const user = {username: 'tony', password: '098123'}
// 待执行的 SQL 语句，其中英文的 ? 表示占位符
const sqlStr = 'insert into users (username, password) values(?, ?)'
// 使用数组的形式，依次为 ? 占位符指定具体的值
db.query(sqlStr, [user.username, user.password], (err, results) => {
    if(err) return console.log(err.message)
    // 注意：如果执行的是 insert 插入语句，则 results 是一个对象
    // 可以通过 affectedRows 属性（表示影响的行数），来判断是否插入成功
    if(results.affectedRows === 1) console.log('插入数据成功')
}) */

/* // 更新数据库
const user = {id: 4, username: 'stack', password: '0000'}
const sqlStr = 'update users set username = ? ,password = ? where id =?'
db.query(sqlStr,[user.username,user.password,user.id],(err, result) => {
    if(err) return console.error(err.message)
    if(result.affectedRows === 1) console.log('更新数据成功')
}) */

/* // 删除数据
const sqlStr = 'delete from users where id = ?'
db.query(sqlStr, 4, (err, results) => {
    if(err) return console.error(err.message)
    if(results.affectedRows === 1) console.log('删除数据成功')
}) */