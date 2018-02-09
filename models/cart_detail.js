var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cart_detail = new Schema({
	cart_id: {type:Schema.Types.ObjectId,ref:'cart'},
	product_id:  {type:Schema.Types.ObjectId,ref:'product', required : true},
	quantity: {type:Number, required : true , default : 1},
},{collection : "cart_detail"});

module.exports = mongoose.model('cart_detail',cart_detail);