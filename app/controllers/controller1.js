function controller1 ($scope) {
	var clients = [];
	$scope.addClient = function  (client) {
		clients.push(client);
	}

	$scope.showClients =  function  () {
		console.log(clients);
	}
}