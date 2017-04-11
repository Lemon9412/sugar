/**
 * Created by qiqi_ on 2017/4/10.
 */
var express = require('express');
var router = express.Router();

/* 热门图片 */
router.get('/discount', function(req, resp, next) {
    var collection = database.collection("discount");
    collection.find().toArray(function (err, docs) {
        resp.send(docs);
        console.log(docs);
    });
});

module.exports = router;