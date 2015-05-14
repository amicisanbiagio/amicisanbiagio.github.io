
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

}]);

