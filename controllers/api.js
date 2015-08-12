var Guitar = require('../models/guitaritem')

var apiController = {
	get : function(req, res){

		Guitar.find({}, function(err, guitars){
			res.send(guitars)
		});
	},

	create : function(req, res){
		var guitar = new Guitar(req.body);
		guitar.save(function(err, guitar){
			res.send(guitar)
		});
	}
}

module.exports = apiController;