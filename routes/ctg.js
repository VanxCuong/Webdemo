var express = require('express');
var router = express.Router();
var category=require("../models/category");
var product=require("../models/product");
var multer=require("multer");
/* GET home page. */
router.get('/:id', function(req, res, next) {
  var ctg=req.params.id;
  product.find({category_id:{name:ctg}}, function (err,result) {
    if(err) throw err;
      else{
          console.log(result);
          
          res.render("categories",{data:result});
      }
    });

});


module.exports = router;
