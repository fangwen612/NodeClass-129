var express = require('express');
var router = express.Router();
var firebaseDB = require('../connection/firebase_admin_connect');
var firebase = require('../connection/firebase_connect');
router.get('/', function (req, res, next) {
    console.log(firebase.auth())
    firebaseDB.ref().once('value',function(snapshot){
        console.log(snapshot.val());
    })
    res.render('index', {
        title: '六角學院留言板'
    });
});
/* GET home page. */
module.exports = router;