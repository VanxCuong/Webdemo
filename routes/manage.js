var express = require('express');
var router = express.Router();
var category=require("../models/category");
var product=require("../models/product");
var multer=require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+"-"+file.originalname)
    }
  })
  //check upload
  function fileFilter (req, file, cb) {
    if(!file.originalname.match(/\.(jpg|png|gif|jqeg)$/)){
      cb(new Error('Bạn Chỉ được upload file ảnh'));
      console.log('Bạn chỉ được upload file Ảnh');
    }else{
      cb(null, true);
    }
  }
  var upload = multer({ storage: storage,fileFilter:fileFilter }).single('images');

/**
 * load http Sản Phẩm
 */
router.get('/product', function(req, res, next) {
    category.find({}).then(function(result){
        res.render("manage/sanpham",{data:result});
    })
});
/**
 * Insert Sản phẩm
 */
router.post('/product',upload, function(req, res, next) {
    if(req.file==undefined){
        res.send("Bạn Chưa UpLoad Ảnh");
    }else{
        var InsertProduct=new product({
            name:  req.body.name,
            price: req.body.price,
            image: req.file.path,
            description: req.body.description,
            category_id : req.body.category_id,
        })
        InsertProduct.save(function(err,result){
            if(err) throw err;
            else  res.redirect('/manage/product');
        })
    }
});
router.get("/result",function(req,res,next){
    product.findById({_id:"5a7a7cccacf0ea1eb802ac72"}).populate("category_id").exec(function(err,result){
        res.send(result);
    })
})
/* GET users listing. */
router.get('/', function(req, res, next) {
    category.find({}).then(function(result){
        res.render("manage/danhmuc",{data:result});
    })
});
/**
 * Insert category
 */
router.post('/category', function(req, res, next) {
    var name=req.body.category;
    insertCategory=new category({
        name:name
    })
    insertCategory.save(function(err,model){
        if(err) throw err;
        else res.redirect('/manage');
    })
});
/**
 * Xóa category
 */
router.get('/category/:id', function(req, res, next) {
    var id=req.params.id;
    category.remove({_id:id},function(err,result){
        if(result){
            res.redirect('/manage');
        }
    })
});
/**
 * Thêm Sản Phẩm
 */
module.exports = router;
