angular.module('myapp', [])

.controller('ProductCtrl', function($scope, $rootScope){
	$scope.items = [{	
		caseId: "126674",
		name: "Satya", 
		address : "2201 Gerasdorf", 
		handset: "Samsung", 
		imei: "1600602015000186",
		state: "state",
		status: "Deal",
		resolve: "Open",
		resolveState: "IW",
		repairCenter: "repair Center",
		registerDate: "Reg Date",
		main: "Main Rc",
		ip: "13.11.15"
		}
	];
	$scope.openAddModal = function(){
		$('.addModal').modal('show');
	}
	$scope.SaveItem = function(){
		$scope.items.push($scope.item);
		$scope.item = '';
		$('.addModal').modal('hide')
	}
	var key;
	$scope.editItem = function(item, index){
		key = index;
		$scope.item = item;
		$('.editModal').modal('show');
	}
	$scope.updateItem = function(item){
		$scope.items[key].name = item.name;
		$scope.items[key].address = item.address;
		$scope.items[key].handset = item.handset;
		$scope.items[key].imei = item.imei;
		$scope.items[key].state = item.state;
		$scope.items[key].status = item.status;
		$scope.items[key].resolve = item.resolve;
		$scope.items[key].resolveState = item.resolveState;
		$scope.items[key].repairCenter = item.repairCenter;
		$scope.items[key].registerDate = item.registerDate;
		$scope.items[key].main = item.main;
		$scope.items[key].ip = item.ip;
		$('.editModal').modal('hide');
	}
	$scope.removeItem = function(index){
		var r = confirm("are you sure want to delete!");
		if(r==true){
			$scope.items.splice(index, 1);
		}
	}
})
