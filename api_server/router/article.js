const express = require('express');

const expressJoi = require('@escook/express-joi');
const { add_cate_schema, detele_cate_schema, get_cate_schema, update_cate_schema} = require('../schema/article');

const router = express.Router();

const artcate_handle = require('../router_handle/article')

router.get('/cates', artcate_handle.getArticleCates)

router.post('/addcates', expressJoi(add_cate_schema), artcate_handle.addArticleCates)

router.get('/deletecate/:id', expressJoi(detele_cate_schema), artcate_handle.deleteCateById)

router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handle.getArtCateById)

router.post('/updatecate', expressJoi(update_cate_schema), artcate_handle.updateCateById)

router.post('/add',  artcate_handle.addArticle)

module.exports = router;