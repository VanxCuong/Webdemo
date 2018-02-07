var express = require('express');
var router = express.Router();
var category=require("../models/category");
var product=require("../models/product");
var multer=require("multer");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/danh-muc', function(req, res, next) {
  res.render('categories');
});

router.get('/chi-tiet-san-pham', function(req, res, next) {
  res.render('product_detail');
});

router.get('/gio-hang', function(req, res, next) {
  res.render('cart');
});
router.get("/menu",function(req,res,next){
  category.find({},function(err,result){
    res.send(result);
  })
})



module.exports = router;
