
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

searchLectio.factory('myJSON', function() {
	return {
		getNestedUniqueKey:
			function(subfield01,subfield02,table) {

				var key;
				var keys = [];
				var record;

				angular.forEach(table,function(record) {
					angular.forEach(record[subfield01],function(item) {
						key = item[subfield02];
						if( keys.indexOf(key) === -1 ) {
							keys.push(key);
						}
					});
				});

				return keys;

			}
	};
});

searchLectio.run(function($rootScope, myJSON) {
            $rootScope.jsonUtility = myJSON;
        });
