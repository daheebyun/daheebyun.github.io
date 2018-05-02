var color = 0;
	
document.onmousemove = function (event){

		// same as above - var x = event["x"];
		// same as above - var y = event["y"];
		var x = event.x;
		var y = event.y;

		//console.log ( x, y );
		// works for objects; not string;

		var div = document.createElement("div")
		div.style.left = x + "px"; 
		div.style.top = y + "px";
		div.style.backgroundColor = "hsl(" + color + ", 100%, 50%)";
		document.body.appendChild(div);

		color = color + 1
	}
