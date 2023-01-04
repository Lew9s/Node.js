// 导入定义验证规则的包
const joi = require('joi')

// 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 定义 nickname, email 的验证规则
const nickname = joi.string()
const email = joi.string().email()

// 定义 user_pic 的验证规则
const avatar = joi.string().dataUri().required()

// 定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
    body: {
        username,
        password,
    }
}

// 验证规则对象 - 更新用户的基本信息
exports.update_userinfo_schema = {
    body:{
        nickname,
        email,
    }
}

// 验证规则对象 - 重置密码
exports.update_password_schema = {
    body: {
        // 使用 password 这个规则，验证 req.body.oldPwd 的值
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}

//验证规则对象 - 更新用户头像
exports.update_avatar_schema = {
    body: {
        avatar
    }
}