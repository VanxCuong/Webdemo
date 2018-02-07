var express = require('express');
var router = express.Router();
var obj=require("../models/obj");

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




module.exports = router;
