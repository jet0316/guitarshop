var mongoose = require('mongoose');

var guitarSchema = mongoose.Schema({
	companyName     : String,
	model           : String,
	electric        : String,
	price           : Number,
	image			: String 
});

var Guitar = mongoose.model('Guitars', guitarSchema);

module.exports = Guitar;