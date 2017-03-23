$('#navOpen').click(function(){
	var navigation = $('.navigation');
	if (window.innerWidth > 480) {
		navigation.show();
		for(var i=0; i<5; i++){
			navigation.animate({
				"right": "+=10%"
			}, 50);	
		}
	} else {
		navigation.show();
		for(var i=0; i<10; i++){
			navigation.animate({
				"right": "+=5%"
			}, 25);	
		}
	}
});


$('#navClosed').click(closeNav);

$('.nav-elements').click(closeNav);

function closeNav(){
	var navigation = $('.navigation');
	if (window.innerWidth > 480) {
		for(var i=0; i<5; i++){
			navigation.animate({
				"right": "-=10%"
			}, 50);
		}
	} else{
		navigation.hide();
		navigation.css("right", "-50%");
	}

}