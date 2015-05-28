
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
		if( record.field01 == $scope.field01 || $scope.field01 == '__' )
		if( record.field02 == $scope.field02 || $scope.field02 == '__' )
		if( record.field03 == $scope.field03 || $scope.field03 == '__' )
		if( record.field04 == $scope.field04 || $scope.field04 == '__' )
		if( record.field05 == $scope.field05 || $scope.field05 == '__' )
		if( record.field06 == $scope.field06 || $scope.field06 == '__' )
		if( record.field07 == $scope.field07 || $scope.field07 == '__' )
		if( record.field08 == $scope.field08 || $scope.field08 == '__' )
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

	$scope.citOrder = function(record) {
		var str = record.field03;
		var i = str.substring(0,str.lastIndexOf(","));
		var last1 = (str.lastIndexOf("-") == -1) ? str.length : str.lastIndexOf("-");
		var last2 = (str.lastIndexOf("b") == -1) ? last1 : str.lastIndexOf("b");
		var dec = str.substring(str.lastIndexOf(",")+1,last2);
		return Number(i)+Number(dec)/100;
	}

}]);

