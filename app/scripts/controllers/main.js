'use strict';

angular.module('tictacAngularApp')
  .controller('MainCtrl', ['$scope', 'angularFire', function($scope, angularFire){
  		// Get Firebase fired up
  		$scope.ticTacToe = [];
  		$scope.queue = {};

		var queueUrl = new Firebase("https://tictacPLEASEWORK.firebaseio.com/queue");
  		// Initialize and link Firebase to queue
  		angularFire(queueUrl, $scope, "queue").then( function(){ 
  			if($scope.queue.gameId == undefined){
  				console.log("$scope.queue.gameId is " + $scope.queue.gameId)
  				$scope.player = 1
  				console.log("this is player" + $scope.player)
  				var newGame ={
  					board: [[{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
							   [{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
						       [{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}]]

  				}

  				$scope.gameId = $scope.ticTacToe.push(newGame) - 1
  				$scope.queue.gameId = $scope.gameId
  			}
  			else{
  				// Designate the player as Player 2
  				$scope.player = 2
  				console.log("this is player" + $scope.player)
  				// Designate which game it's in
  				$scope.gameId = $scope.queue.gameId
				// clear out the queue
  				$scope.queue = {}
  			}
  		
  		// on entry, push an item into the queue array
  			// onload add someone to the queue
  		// Initialize and link ticTacToe to board
  		var ticTacUrl = new Firebase("https://tictacPLEASEWORK.firebaseio.com/ticTacToe");
  			angularFire(ticTacUrl, $scope, "ticTacToe", []).then(function(){;
    // Controller for win condition
			$scope.ticTacToe=[[{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
							  [{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
						      [{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}]];
	
			$scope.classes = ['X', 'O'];
			$scope.counter={value: 0};	
			$scope.checkWin = function(row, column, holder){ 
				console.log("entering alternating code");
			// Make the X's and O's alternate
				$scope.counter.value += 1;
				holder.turn = $scope.counter.value;
				holder.value = $scope.classes[$scope.counter.value%2];
				console.log("alternating works");
				// $scope.ticTacToe[row][column].turn = holder.value;

			// Win condition
				console.log("entering win condition code")
				for(var x=0;x<=2;x+=1){
					if(this.ticTacToe[x][0].value == this.ticTacToe[x][1].value &&
					this.ticTacToe[x][1].value == this.ticTacToe[x][2].value && 
					this.ticTacToe[x][1].value !== ""){
					document.getElementById("popup").style.display="block";}
				
					if(this.ticTacToe[0][x].value == this.ticTacToe[1][x].value &&
					this.ticTacToe[1][x].value == this.ticTacToe[2][x].value && 
					this.ticTacToe[1][x].value !== ""){
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
	});
}])
