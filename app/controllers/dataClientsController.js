
(function () {
	
	angular.module('app').controller('dataClientsController', ['$scope', dataClientsController]);

	function dataClientsController ($scope) {
		$scope.dataClient = [
		{ "name": "Erik(a)", "last_name": "cra" },
		{ "name": "Sebastian", "last_name": "Quintana" }
		]

		$scope.changeData = function () {
			$scope.dataClient = [
			{ "name": "Erik", "last_name": "Giraldo" },
			{ "name": "Sebastian 1", "last_name": "Quintana 1" }		
			];

		}
	}
})()