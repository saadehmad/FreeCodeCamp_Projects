var dom = document;

var screen = dom.getElementById('calScreen');
var scr = '';

function buttonPress(input){
	if (input === 'AC') {
		allClear();
	}
	else if(input === 'CE'){
		clear();
	}
	else if(input === '='){
		result();
	}
	else{
		appendToScr(input);
	}
}

// it will clear the whole screen
function allClear(){
	scr += '';
	scr = '';
	render();
}

// it will only clear the last character
function clear(){
	scr += '';
	scr = scr.substring(0, scr.length-1);
	render();
}

// whatever the input is it will append it to screen
function appendToScr(input){
	scr += '';
	scr += input;
	render();
}

// render the input
function render(){
	screen.innerHTML = scr;
}

// calculate the result
function result(){
	scr += '';
	scr = scr.replace('x', '*');
	scr = math.eval(scr);
	render();
}

function addbits(s){
    var total= 0, s= s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while(s.length){
        total+= parseFloat(s.shift());
    }
    return total;
}