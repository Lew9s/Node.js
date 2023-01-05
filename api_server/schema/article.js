const joi = require('joi')

const name = joi.string().required()
const alies = joi.string().alphanum().required()

const id = joi.number().integer().min(1).required()

exports.add_cate_schema = {
    body: {
        name,
        alies,
    }
}

exports.detele_cate_schema = {
    params: {
        id,
    }
}

exports.get_cate_schema = {
    params: {
        id,
    }
}

exports.update_cate_schema = {
    body: {
        id,
        name,
        alies,
    }
}