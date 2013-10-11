'use strict';

angular.module('tictacAngularApp')
  .controller('MainCtrl', ['$scope', 'angularFire', function($scope, angularFire){
  		// Get Firebase fired up
  		$scope.games = [];
  		$scope.queue = {};

  		var ticTacUrl = new Firebase("https://tictacPLEASEWORK.firebaseio.com/queue");
  		angularFire(ticTacUrl, $scope, "queue", {}).then(function(){

			var gamesUrl = new Firebase("https://tictacPLEASEWORK.firebaseio.com/games");
	  		// Initialize and link Firebase to queue
	  		angularFire(gamesUrl, $scope, "games", []).then( function(){ 
	  			if($scope.queue.gameId == undefined){
	  				console.log("$scope.queue.gameId is " + $scope.queue.gameId);
	  				$scope.player = "p1";
	  				console.log("this is player" + $scope.player);
	  				var newGame = {
	  					board: [[{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
								[{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
							    [{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}]]
	  				};
	  					console.log("instantiating newGame")
	  				$scope.gameId = $scope.games.push(newGame) - 1;
	  					console.log($scope.gameId);
  					$scope.queue = {hello:"world"};
	  				$scope.queue.gameId = $scope.gameId;
	  					console.log("this is the value of $scope.queue.gameId = " + $scope.queue.gameId);

	  			}
	  			else{
	  				// Designate the player as Player 2
	  				$scope.player = "p2";
	  				console.log("this is player" + $scope.player);
	  				// Designate which game it's in
	  				$scope.gameId = $scope.queue.gameId;
					// clear out the queue
	  				$scope.queue = {};
	  			}
  	
    // Controller for win condition
			// $scope.ticTacToe=[[{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
			// 				  [{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}], 
			// 			      [{value: '', turn: ''},{value: '', turn: ''},{value: '', turn: ''}]];
	
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
					if(this.games[x][0].value == this.games[x][1].value &&
					this.games[x][1].value == this.games[x][2].value && 
					this.games[x][1].value !== ""){
					document.getElementById("popup").style.display="block";}
				
					if(this.games[0][x].value == this.games[1][x].value &&
					this.games[1][x].value == this.games[2][x].value && 
					this.games[1][x].value !== ""){
					document.getElementById("popup").style.display="block";}
					console.log("win condition code executes")
				// alert(ticTacToe[0]{{x}} + " won in column " +( (x==)
			
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
