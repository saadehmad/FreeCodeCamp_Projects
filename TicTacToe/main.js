var inputX = document.getElementById('inputX'),
	inputO = document.getElementById('inputO'),
	table = document.getElementById('table'),
	input = document.getElementById('input'),
	userInput = '',
	comInput = '';

inputX.addEventListener('click', assValDisTabRemInp);

inputO.addEventListener('click', assValDisTabRemInp);

function assValDisTabRemInp(event){
	// accessing which element is click through mouse event property
	userInput = (event.target.id === 'inputX') ? 'X' : 'O';
	if (userInput === 'X') {
		comInput = 'O';
	} else {
		comInput = 'X';
	}

	input.style.display = 'none';
	
	setTimeout(function(){
		table.style.display = 'table';
	}, 500);
}

// converting tables boxes into an array
function convertTableIntoArr(){
	var arr,
		table;
	table = document.getElementById('table').rows;
	arr = 0;/*table.forEach(function(val){
		return val;
	});*/
	// console.log(table[0].cells[0].innerHTML = );
}

convertTableIntoArr();

// every time user click on a box on table this function fire!!
function boxClicked(event){
	console.log(event);
}

// Game logic
var Game = function(state){
	this.score = state.score;
	this.over = false;
};

function score(game){
	if (game.win === 'player') {
		return 10;
	} else if (game.win === 'opponent') {
		return -10;
	} else {
		return 0;
	}
}


// minimax Alogrithm it will give us the perfect position
function minimax(game) {
	if (game.over) {
		return score(game);
	}

	scores = [];
	moves = [];

}