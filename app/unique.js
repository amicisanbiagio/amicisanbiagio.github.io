
searchLectio.filter('unique', function() {
	return function(collection, keyname) {
		var output = [], 
			keys = [];

		angular.forEach(collection, function(item) {
			var key = item[keyname];
			if(keys.indexOf(key) === -1) {
				keys.push(key);
				output.push(item);
			}
		});
		return output;
	};
});


searchLectio.filter('extractUniqueSubField', function() {
	return function(collection, subfield01, subfield02) {
		var key;
		var keys = [];
		var record;

		angular.forEach(collection,function(record) {
			angular.forEach(record[subfield01],function(item) {
				key = item[subfield02];
				if( keys.indexOf(key) === -1 ) {
					keys.push(key);
				}
			});
		});

		return keys;

	};
});

