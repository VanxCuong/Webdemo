var express = require('express');
var router = express.Router();
var category=require("../models/category");
var product=require("../models/product");
var Giohang=require("../models/giohang");
/* GET home page. */
router.get('/:id', function(req, res, next) {
  var ctg=req.params.id;
  product.find({}).populate({path:"category_id",match: { name: ctg},select:"name"}).then(function(result){
    res.render("categories",{data:result,danhmuc:ctg});
  })

});
/**
 * Chi tiết sản phẩm
 */
router.get("/:ctg/:id",function(req,res,next){
  id=req.params.id;
  ctg=req.params.ctg;
  product.findById({_id:id},function(err,result){
    product.find().populate({path:"category_id",match:{name:ctg}}).then(function(kq){
        res.render("product_detail",{data:result,kq:kq,ctg:ctg});
    })
    
  })
})
router.get("/:ctg/add/:id",function(req,res,next){
  id=req.params.id;
  ctg=req.params.ctg;
  var giohang=new Giohang(req.session.cart?req.session.cart:{items:{}}); // Nếu có giỏ session cart thì lấy session không thì truyền vào object item rỗng
  product.findOne({_id:id},function(err,result){
    giohang.add(result._id,result);
    req.session.cart=giohang;
     res.redirect('/gio-hang');
  })

})
router.get("/update/:id/:sl",function(req,res,next){
  id=req.params.id;
  sl=req.params.sl;
  var giohang=new Giohang(req.session.cart);
  giohang.update(id,sl);
  req.session.cart=giohang;
  res.send("oke");
})
router.get("/session/delete/:id",function(req,res,next){
  id=req.params.id;
  var giohang=new Giohang(req.session.cart);
  giohang.delete(id);
  req.session.cart=giohang;
   res.redirect('/gio-hang');
})
module.exports = router;
