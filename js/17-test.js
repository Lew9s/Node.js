//导入自定义的格式化时间的模块
const TIME = require('./16-dateFormat.js')

//调用方法，进行时间格式化
const dt = new Date()
//console.log(dt)
const newDT = TIME.dateFormat(dt)
console.log(newDT)
