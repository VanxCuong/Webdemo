var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
	namePd:  {type: String, required : true},
	price: {type: Number,required:true},
	image: String,
	description: String,
	category_id : {type:Schema.Types.ObjectId,ref:'category'},
},{collection : "product"});

module.exports = mongoose.model('product',product);