var numSquares=6;
var colors=generateRandomColors(numSquares);
var divs=document.querySelectorAll(".box");
var pickedColor=randomColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var easyButton=document.getElementById("easyBtn");
var hardButton=document.getElementById("hardBtn");

easyButton.addEventListener("click",function(){
	resetButton.textContent="New Colors";
	h1.style.backgroundColor="steelblue";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=randomColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<divs.length;i++)
	{
		if(colors[i])
		{
			divs[i].style.backgroundColor=colors[i];
		}
		else
		{
			divs[i].style.display="none";
		}
	}
});

hardButton.addEventListener("click",function(){
	resetButton.textContent="New Colors";
	h1.style.backgroundColor="#steelblue";
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=randomColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<divs.length;i++)
	{
			divs[i].style.backgroundColor=colors[i];
			divs[i].style.display="block";
	}
});

resetButton.addEventListener("click",function(){
	this.textContent="New Colors";
	message.textContent="";
	colors=generateRandomColors(numSquares);
	pickedColor=randomColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<colors.length;i++)
	{
		divs[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent=pickedColor;

for(var i=0;i<colors.length;i++)
{
	divs[i].style.backgroundColor=colors[i];

	divs[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			message.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?";
		} else {
			message.textContent="Try Again";
			this.style.backgroundColor="#232323";
		}
	});
}

function changeColors(color){
	for(var i=0;i<divs.length;i++)
	{
		divs[i].style.backgroundColor=pickedColor;
	}
}

function randomColor(){
	var random=Math.floor(Math.random()*(colors.length-1));
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColorPicker());
	}
	return arr;
}

function randomColorPicker(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}