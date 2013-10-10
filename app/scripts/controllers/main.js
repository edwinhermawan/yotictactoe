'use strict';

angular.module('tictacAngularApp')
  .controller('MainCtrl', ['$scope', 'angularFire', function($scope, angularFire){
  		var url = new Firebase("https://tictacPLEASEWORK.firebaseio.com/");

  		var promise = angularFire(url, $scope, "ticTacToe");
    // Controller for win condition
		promise.then(function(){
			console.log("entering 10");
			$scope.ticTacToe=[['','',''], 
						['','',''], 
						['','','']];
			// $scope.ticTacToe=[[{value: ""}, {value: ""}, {value: ""}], 
			// 			[{value: ""}, {value: ""}, {value: ""}], 
			// 			[{value: ""}, {value: ""}, {value: ""}]];

			$scope.classes = ['X', 'O'];
			$scope.counter={value: 0};
			

			$scope.checkWin = function(row, column, holder){ 
			// Make the X's and O's alternate
				console.log("entering alternating code")
				$scope.counter.value += 1;
				holder = $scope.classes[$scope.counter.value%2]
				console.log("alternating works")
			// Win condition
				$scope.ticTacToe[row][column] = holder;
				console.log("entering win condition code")
				for(var x=0;x<=2;x+=1){
					if(this.ticTacToe[x][0] == this.ticTacToe[x][1] &&
					this.ticTacToe[x][1] == this.ticTacToe[x][2] && 
					this.ticTacToe[x][1] !== ""){
					document.getElementById("popup").style.display="block";}
				
					if(this.ticTacToe[0][x] == this.ticTacToe[1][x] &&
					this.ticTacToe[1][x] == this.ticTacToe[2][x] && 
					this.ticTacToe[1][x] !== ""){
					document.getElementById("popup").style.display="block";}
				console.log("win condition code executes")
				// alert(ticTacToe[0]{{x}} + " won in column " +( (x==)
			
				// if((row==x,column==0) == (row==x,column==1}}) &&
				// row({{x}},column{{1}}) == row({{x}},columncolumn{{2}}) && 
				// row({{x}},column{{0}}) != ""){
				// document.getElementById("popup").style.display="block";}
				// };
			};

			// $scope.ticTacToe.onDisconnect().remove()
			// console.log( $scope.ticTacToe.onDisconnect().remove())
		};
	});
	}]);

