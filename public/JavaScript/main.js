var angular = angular.module('angular', ['ngResource', 'ngRoute']);

angular.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/templates/make-guitar',
			controller  : 'submitGuitar', 
		})
});

angular.factory('guitarFactory', function($resource){
	var model = $resource('/api/guitars/:id', {id : '@_id'})
	return {
		model   : model,
		guitars : model.query()
	}
});

angular.controller('submitGuitar', function($scope, guitarFactory){
	$scope.addGuitar = function(){
		var myNewGuitar = new guitarFactory.model(this.newGuitar)
		myNewGuitar.$save(function(returnGuitar){
			guitarFactory.guitars.push(returnGuitar)
		});
		console.log(guitarFactory.guitars)
		this.newGuitar = {}
	}
	$scope.guitar = guitarFactory.guitars
});

console.log('TEST')