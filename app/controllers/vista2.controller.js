(function  () {
	var controllerId = 'vista2';

	angular.module('app').controller(controllerId, ['$http', 'clientService', vista2]);

	function vista2($http, clientService){
		var vm = this;

		// vm.dataResult = [
		// 	{ "name": "Erik", "last_name": "Giraldo" },
		// 	{ "name": "Sebastian 1", "last_name": "Quintana 1" }		
		// 	];

		var result = clientService.GetDataClient().then(function (data) {
			vm.dataResult = data;
		});		
		
	}
})();