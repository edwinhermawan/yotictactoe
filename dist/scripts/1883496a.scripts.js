"use strict";angular.module("tictacAngularApp",["firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("tictacAngularApp").controller("MainCtrl",["$scope","angularFire",function(a,b){a.queue={},a.games=[];var c=new Firebase("https://tictacPLEASEWORK.firebaseio.com/queue");b(c,a,"queue",{}).then(function(){var c=new Firebase("https://tictacPLEASEWORK.firebaseio.com/games");b(c,a,"games",[]).then(function(){if(void 0==a.queue.gameId){a.player="p1",console.log("This is player "+a.player);var b={board:[[{value:"",turn:""},{value:"",turn:""},{value:"",turn:""}],[{value:"",turn:""},{value:"",turn:""},{value:"",turn:""}],[{value:"",turn:""},{value:"",turn:""},{value:"",turn:""}]],win:!1};a.gameId=a.games.push(b)-1,console.log("This is $scope.games "+a.games),console.log("We are in gameId "+a.gameId),a.queue.gameId=a.gameId,console.log("The value of $scope.queue.gameId = "+a.queue.gameId)}else a.player="p2",console.log("This is player "+a.player),a.gameId=a.queue.gameId,console.log(a.games),console.log("We are in gameId "+a.gameId),a.queue={};a.classes=["X","O"],a.counter={value:0},console.log("Got to $scope.counter"),a.checkWin=function(b,c,d){console.log("entering alternating code"),a.counter.value+=1,d.turn=a.counter.value,d.value=a.classes[a.counter.value%2],console.log("alternating works"),console.log("entering win condition code");for(var e=0;2>=e;e+=1)a.games[a.gameId].board[e][0].value==a.games[a.gameId].board[e][1].value&&a.games[a.gameId].board[e][1].value==a.games[a.gameId].board[e][2].value&&""!==a.games[a.gameId].board[e][1].value&&(a.games[a.gameId].win=!0),a.games[a.gameId].board[0][e].value==a.games[a.gameId].board[1][e].value&&a.games[a.gameId].board[1][e].value==a.games[a.gameId].board[2][e].value&&""!==a.games[a.gameId].board[1][e].value&&(a.games[a.gameId].win=!0),console.log("win condition code executes")},a.$watch("games[$scope.gameId].win",function(){document.getElementById("popup").style.display="block"})})})}]);