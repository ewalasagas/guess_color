//NOT REFACTORED - SEE PART 7/8/9 - OR DOWNLOAD COURSE RESOURCES

var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var color_display = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	color_display.innerText = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	color_display.innerText = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	resetButton.innerText = "New Colors";
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	color_display.innerText = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		messageDisplay.innerText = "";
	}
	h1.style.backgroundColor = "steelblue";
});

color_display.innerText = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		//compare color to picked color
		if(clickedColor === pickedColor) {
			messageDisplay.innerText = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.innerText = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.innerText = "Try Again";
		}
	});
}


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//function for random number
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return taht array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var blue = Math.floor(Math.random() * 256);
	return rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

}