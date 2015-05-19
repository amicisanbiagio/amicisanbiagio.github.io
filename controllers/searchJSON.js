var bible = {
	'__': 0,
	'Gn': 1,
	'Es': 2,
	'Lv': 3,
	'Nm': 4,
	'Dt': 5,
	'Gs': 6,
	'Gdc': 7,
	'Rt': 8,
	'1 Sam': 9,
	'2 Sam': 10,
	'1 Re': 11,
	'2 Re': 12,
	'1 Cr': 13,
	'2 Cr': 14,
	'Esd': 15,
	'Ne': 16,
	'Tb': 17,
	'Gdt': 18,
	'Est': 19,
	'1 Mac': 20,
	'2 Mac': 21,
	'Gb': 22,
	'Sal': 23,
	'Prv': 24,
	'Qo': 25,
	'Ct': 26,
	'Sap': 27,
	'Sir': 28,
	'Is': 29,
	'Ger': 30,
	'Lam': 31,
	'Bar': 32,
	'Ez': 33,
	'Dn': 34,
	'Os': 35,
	'Gl': 36,
	'Am': 37,
	'Abd': 38,
	'Gio': 39,
	'Mic': 40,
	'Na': 41,
	'Ab': 42,
	'Sof': 43,
	'Ag': 44,
	'Zc': 45,
	'Ml': 46,
	'Mt': 101,
	'Mc': 102,
	'Lc': 103,
	'Gv': 104,
	'At': 105,
	'Rm': 106,
	'1 Cor': 107,
	'2 Cor': 108,
	'Gal': 109,
	'Ef': 110,
	'Fil': 111,
	'Col': 112,
	'1 Ts': 113,
	'2 Ts': 114,
	'1 Tm': 115,
	'2 Tm': 116,
	'Tt': 117,
	'Fm': 118,
	'Eb': 119,
	'Gc': 120,
	'1 Pt': 121,
	'2 Pt': 122,
	'1 Gv': 123,
	'2 Gv': 124,
	'3 Gv': 125,
	'Gd': 126,
	'Ap': 127,
	'N/A': 1000,
}

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

	$scope.bibleBookNumber = function(record) {
		return bible[record.field02];
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

