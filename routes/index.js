var express = require('express');
var router = express.Router();
var category=require("../models/category");
var product=require("../models/product");
var Giohang=require("../models/giohang");
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
  if(!req.session.cart){
     data=null;
  }else{
    // Object.keys(giohang.items).length==0   => Check xem đối tượng items có phần tử không. Nếu không có thì trả về null 
    // Thường gặp khi xóa phần tử.
    var giohang=new Giohang(req.session.cart);
    if(Object.keys(giohang.items).length==0){
      data=null;
    }else{
      var data=giohang.convertArray();
      res.render('cart',{data:data});
    }
  }
});
router.get("/menu",function(req,res,next){
  category.find({},function(err,result){
    res.send(result);
  })
})



module.exports = router;
