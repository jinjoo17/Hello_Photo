var mongoose = require('mongoose');
var photoVO = mongoose.Schema({

	strTitle : String,
	strText : String,
	PhotoName : String,
	strDate : {type:Date,default:Date.now()}
	
})

module.exports=mongoose.model('photo',photoVO)