'use strict';

angular.module('tictacAngularApp')
  .controller('MainCtrl', ['$scope', 'angularFire', function($scope, angularFire){
  		// Get Firebase fired up
  		
  		$scope.queue = {};
  		$scope.games = [];

  		// Initialize and link Firebase to queue
  		var queue = new Firebase("https://tictacPLEASEWORK.firebaseio.com/queue");
  		angularFire(queue, $scope, "queue", {}).then(function(){

  			// Initialize and link Firebase to games
			var gamesUrl = new Firebase("https://tictacPLEASEWORK.firebaseio.com/games");
	  		angularFire(gamesUrl, $scope, "games", []).then( function(){ 

	  			// Logic for assigning Player 1
	  			if($scope.queue.gameId == undefined){
	  				$scope.player = "p1";
	  				console.log("This is player " + $scope.player);

	  				var newGame = {
	  					board: [[{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
								[{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
							    [{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}]], 
						classes: ['X', 'O'],
						counter: {value: 0}, 
						win: false, 
	  				};
	  				$scope.gameId = $scope.games.push(newGame) - 1;
	  				console.log("This is $scope.games " + $scope.games)
	  				console.log("We are in gameId " + $scope.gameId)
	  				$scope.queue.gameId = $scope.gameId;
  					console.log("The value of $scope.queue.gameId = " + $scope.queue.gameId);
	  			}

	  			// Logic for assigning Player 2
	  			else{
	  				$scope.player = "p2";
	  				console.log("This is player " + $scope.player);
	  				// Designate which game it's in
	  				$scope.gameId = $scope.queue.gameId;
	  				console.log($scope.games);
	  				console.log("We are in gameId " + $scope.gameId);

					// Clear out the queue
	  				$scope.queue = {};
	  			}
  			
			

			console.log("Got to $scope.counter")

			$scope.checkWin = function(row, column, holder){ 
				console.log("entering alternating code");
			// Make the X's and O's alternate
				$scope.games[$scope.gameId].counter.value += 1;
				holder.turn = $scope.games[$scope.gameId].counter.value;
				holder.value = $scope.games[$scope.gameId].classes[$scope.games[$scope.gameId].counter.value%2];
				console.log("alternating works");
				// $scope.ticTacToe[row][column].turn = holder.value;

			// Win condition
				console.log("entering win condition code")
				for(var x=0;x<=2;x+=1){
					if($scope.games[$scope.gameId].board[x][0].value == $scope.games[$scope.gameId].board[x][1].value &&
					$scope.games[$scope.gameId].board[x][1].value == $scope.games[$scope.gameId].board[x][2].value && 
					$scope.games[$scope.gameId].board[x][1].value !== ""){
					$scope.games[$scope.gameId].win = true;
					console.log("Did you win?" + $scope.games[$scope.gameId].win);
					}
				
					if($scope.games[$scope.gameId].board[0][x].value == $scope.games[$scope.gameId].board[1][x].value &&
					$scope.games[$scope.gameId].board[1][x].value == $scope.games[$scope.gameId].board[2][x].value && 
					$scope.games[$scope.gameId].board[1][x].value !== ""){
					$scope.games[$scope.gameId].win = true;
					}
					console.log("win condition code executes")
			
				// if((row==x,column==0) == (row==x,column==1}}) &&
				// row({{x}},column{{1}}) == row({{x}},columncolumn{{2}}) && 
				// row({{x}},column{{0}}) != ""){
				// document.getElementById("popup").style.display="block";}
				// };
				};
			};
		});
});
}
])
