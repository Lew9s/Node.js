const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin245774',
    database: 'my_db_01'
});

// 向外共享 db 数据库连接对象
module.exports = db;