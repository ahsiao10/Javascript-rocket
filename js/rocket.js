var timer = null; 
var countdownNumber = 10;



var changeState = function (state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
		document.getElementById('countdown').innerHTML = countdownNumber; 
/* document.body.className changes body class inside JS and is the fastest way to remove a class from <body>. */
/*clearInterval is not in state2 becuase the user can choose to abort so it doesn't have to wait till timer gets to 0*/


/*.innerHTML property sets or returns the HTML content (innerHTML) of an element. */
/* Here we are changing the var into a function which countdowns*/

//countdown
if (state ==2){
	timer = setInterval(function () {
		countdownNumber = countdownNumber -1;
		document.getElementById('countdown').innerHTML = countdownNumber; 
		
		if (countdownNumber <= 0) {
			changeState(3);
		};
	}, 500);

} else if (state == 3) {
	var success = setTimeout(function() {
		var randomNumber = Math.round(Math.random()*10);

		console.log('randomNumber:', randomNumber)

//success
		if (randomNumber > 5) {
			changeState(4);

		} else {
			changeState(5); //oh no!
		}
		
	}, 2000);

};

}