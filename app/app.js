
var searchLectio = angular.module('searchLectio', []);

searchLectio.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
		templateUrl: 'views/view.html',
		controller: "searchJSON"
	}).
	otherwise( {
		redirectTo:'/'
	});
}]);

