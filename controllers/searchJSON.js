
searchLectio.controller("searchJSON", ['$scope', function($scope) {
	$scope.table = json;

	$scope.field01 = '__';
	$scope.field02 = '__';
	$scope.field03 = '__';
	$scope.field04 = '__';
	$scope.field05 = '__';
	$scope.field06 = '__';
	$scope.field07 = '__';
	$scope.field08 = '__';

        $scope.changeData = function(field,value) {
		eval("$scope."+field+ " = value");
        }

        $scope.changeResetData = function(field,value) {
		eval("$scope."+field+ " = value");
		if( field != 'field01' ) $scope.field01 = '__';
		if( field != 'field02' ) $scope.field02 = '__';
		if( field != 'field03' ) $scope.field03 = '__';
		if( field != 'field04' ) $scope.field04 = '__';
		if( field != 'field05' ) $scope.field05 = '__';
		if( field != 'field06' ) $scope.field06 = '__';
		if( field != 'field07' ) $scope.field07 = '__';
		if( field != 'field08' ) $scope.field08 = '__';
        }

        $scope.filterData = function(record) {

		var searchField03_01 = 0;
		var searchField03_02 = 0;
		var searchField05 = 0;
		var searchField06 = 0;

		if( $scope.field02 == '__' ) {
			searchField03_01 = 1;
		} else {
			angular.forEach(record.field03, function(item) {
				if( item.subfield01 == $scope.field02 )
					searchField03_01 = 1;
			});
		}

		if( $scope.field03 == '__' ) {
			searchField03_02 = 1;
		} else {
			angular.forEach(record.field03, function(item) {
				if( item.subfield02 == $scope.field03 )
					searchField03_02 = 1;
			});
		}

		if( $scope.field05 == '__' ) {
			searchField05 = 1;
		} else {
			angular.forEach(record.field05, function(item) {
				if( item.subfield01 == $scope.field05 )
					searchField05 = 1;
			});
		}

		if( $scope.field06 == '__' ) {
			searchField06 = 1;
		} else {
			var splitext = $scope.field06.toLowerCase().split(/\s+/);
			var regex = new RegExp( "(?=.*" + splitext.join(")(?=.*") + ")" );
			if( regex.test( record.field06.toLowerCase() ) ) 
				searchField06 = 1;
		}

		if( record.field01 == $scope.field01 || $scope.field01 == '__' )
		if( record.field04 == $scope.field04 || $scope.field04 == '__' )
		if( record.field07 == $scope.field07 || $scope.field07 == '__' )
		if( record.field08 == $scope.field08 || $scope.field08 == '__' )
		if( searchField03_01 == 1 )
		if( searchField03_02 == 1 )
		if( searchField05 == 1 )
		if( searchField06 == 1 )
			return record;
	}

	$scope.initFilterData = function(record) {
		if(	$scope.field01 != '__' ||
			$scope.field02 != '__' ||
			$scope.field03 != '__' ||
			$scope.field04 != '__' ||
			$scope.field05 != '__' ||
			$scope.field06 != '__' ||
			$scope.field07 != '__' ||
			$scope.field08 != '__'
		)
			return $scope.filterData(record);
	}

	$scope.encode = function(string) {
		return encodeURI(string);
	}

	$scope.bibleBookNumber = function(book) {
		return bibleBooks[book];
	}

	$scope.citOrder = function(str) {
		return Number(str.replace(',','.').replace(/[^0-9\.]+/g, ""));
	}

	$scope.recordOrder = function(record) {
		var r = record.field03[0];
		return $scope.bibleBookNumber(r.subfield01) * 1000 + $scope.citOrder(r.subfield02);
	}

}]);

