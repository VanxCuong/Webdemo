var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var obj=Schema({
    category:[{
        name:  {type: String, required : true},
        product:[{
            price: {type: Number,required:true},
            image: String,
            description: String,
            updated: { type: Date, default: Date.now },
            cart:[{
                fullname:  {type: String},
                phone: {type: String},
                email: {type : String},
                total: {type : Number}
            }],
            
        }],
    }]
})
module.exports = mongoose.model('obj',obj);