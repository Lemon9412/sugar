/**
 * Created by qiqi_ on 2017/3/30.
 */
var express = require('express');
var router = express.Router();

/* 热门图片 */
router.get('/hotPic', function(req, resp, next) {
    var collection = database.collection("hotPic");
    collection.find().toArray(function (err, docs) {
        resp.send(docs);
    });
});
/*好物*/
router.get('/goods',function (req,resp,next) {
   var collection = database.collection("goods");
   collection.find().toArray(function (err,docs) {
       resp.send(docs);
   });
});
/*图片详情*/
router.post('/detaile',function(req,resp,next) {
    var picId = req.body.picId;
    var collection = database.collection("hotPic");
    collection.find({_id:ObjectID(picId)}).limit(1).next(function (err,data) {
        if(err) {
            console.log("获取错误");
        } else {
            console.log(data);
            resp.send(data);
        }
    })
});
/*拍照上传*/
router.post('/editImage',function(req,resp,next) {
    var collection = database.collection("hotPic");
    collection.insert({_id:ObjectID(picId)}).limit(1).next(function (err,data) {

    })
});
module.exports = router;