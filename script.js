var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function opacityLow() {
	document.getElementById("horizontal").style.opacity = "0.5";
	document.getElementById("vertical").style.opacity = "0.5";
	document.getElementById("diagonal").style.opacity = "0.5";
	document.getElementById("radial").style.opacity = "0.5";
}

function setGradient(number) {
	switch (number) {
		// horizontal
		case 1:
			body.style.background = 
			"linear-gradient(to left, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
		
			css.textContent = body.style.background + ";";

			opacityLow();
			document.getElementById("horizontal").style.opacity = "1";
			break;

		// vertical
		case 2:
			body.style.background = 
			"linear-gradient(to top, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
			
			css.textContent = body.style.background + ";";

			opacityLow();
			document.getElementById("vertical").style.opacity = "1";
			break;

		// diagonal
		case 3:
			body.style.background = 
			"linear-gradient(315deg, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";

			css.textContent = body.style.background + ";";

			opacityLow();
			document.getElementById("diagonal").style.opacity = "1";
			break;

		// radial
		case 4:
			body.style.background = 
			"radial-gradient(" 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";

			css.textContent = body.style.background + ";";

			opacityLow();
			document.getElementById("radial").style.opacity = "1";
			break;
		
		case 5:
			var clr3 = document.getElementById("color3").style.display;
			var clr4 = document.getElementById("color4").style.display;
			var clr5 = document.getElementById("color5").style.display;

			if (clr3 != "initial" && clr4 != "initial") {
				document.getElementById("color3").style.display = "initial";
			}	
			else if (clr3 != "none" && clr4 != "initial") {
				document.getElementById("color4").style.display = "initial";
			}
			else if (clr3 != "none" && clr4 != "none" && clr5 != "initial") {
				document.getElementById("color5").style.display = "initial";
			}
			break;

		case 6:
			var clr3 = document.getElementById("color3").style.display;
			var clr4 = document.getElementById("color4").style.display;
			var clr5 = document.getElementById("color5").style.display;

			if (clr3 != "none" && clr4 != "initial" && clr5 != "initial" ) {
				document.getElementById("color3").style.display = "none";
			}
			else if (clr3 != "none" && clr4 != "none" && clr5 != "initial") {
				document.getElementById("color4").style.display = "none";
			}
			else if (clr3 != "none" && clr4 != "none" && clr5 != "none") {
				document.getElementById("color5").style.display = "none";
			}
			break;


		// page load
		default: 
			body.style.background = 
			"linear-gradient(to left, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
		
			css.textContent = body.style.background + ";";

			opacityLow();
			document.getElementById("horizontal").style.opacity = "1";
			break;
	}
}

// ANGLE
function angle() {
	var visible = document.getElementById("anglepick").style.display;
	if (visible === "block") {
		document.getElementById("anglepick").style.display = "none";
		document.getElementById("angle").style.opacity = "0.5";
	}
	else {
		document.getElementById("anglepick").style.display = "block";
		document.getElementById("angle").style.opacity = "1";
	}
}

document.getElementById("angleinput").addEventListener("input", angleChange);
function angleChange() {
	angle = document.getElementById("angleinput").value;

	body.style.background = 
	"linear-gradient("
	+ angle
	+ "deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// HEADER
function header() {
	document.getElementById("gradient").style.background = "gray";
	var header = document.getElementById("header");
	
	header.style.background = 
			"linear-gradient(to left, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
		
			css.textContent = header.style.background + ";";
}

// MAIN
function main() {
	document.getElementById("gradient").style.background = "gray";
	var main = document.getElementById("main");
	
	main.style.background = 
			"linear-gradient(to left, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
		
			css.textContent = main.style.background + ";";
}

// FOOTER
function footer() {
	document.getElementById("gradient").style.background = "gray";
	var footer = document.getElementById("footer");
	
	footer.style.background = 
			"linear-gradient(to left, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
		
			css.textContent = footer.style.background + ";";
}