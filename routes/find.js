/**
 * Created by qiqi_ on 2017/3/30.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/find/hotPic', function(req, res, next) {
    var collection = database.collection("hotPic");
    collection.find().toArray(function (err, docs) {
        resp.send(docs);
    });
});

module.exports = router;