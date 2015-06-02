
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

searchLectio.filter('titleFilter', function() {
	return function(collection, searchText) {
		var filtered = []; 
		var splitext = searchText.toLowerCase().split(/\s+/);
		var regex = new RegExp( "(?=.*" + splitext.join(")(?=.*") + ")" );

		angular.forEach(collection, function(item) {
			if( regex.test( item.field06.toLowerCase() ) ) {
				filtered.push(item);
			}
		});

		return filtered;
	};
});

