var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

header();
main();
footer();
document.getElementById("headericon").classList.add("active");
document.getElementById("mainicon").classList.add("active");
document.getElementById("footericon").classList.add("active");

function horizontalOpacityLow() {
	document.getElementById("horizontal").style.opacity = "0.5";
}

function verticalOpacityLow() {
	document.getElementById("vertical").style.opacity = "0.5";
}

function diagonalOpacityLow() {
	document.getElementById("diagonal").style.opacity = "0.5";
}

function radialOpacityLow() {
	document.getElementById("radial").style.opacity = "0.5";
}

function horizontalOpacityHigh() {
	document.getElementById("horizontal").style.opacity = "1";
}

function verticalOpacityHigh() {
	document.getElementById("vertical").style.opacity = "1";
}

function diagonalOpacityHigh() {
	document.getElementById("diagonal").style.opacity = "1";
}

function radialOpacityHigh() {
	document.getElementById("radial").style.opacity = "1";
}

function opacityLow() {
	document.getElementById("horizontal").style.opacity = "0.5";
	document.getElementById("vertical").style.opacity = "0.5";
	document.getElementById("diagonal").style.opacity = "0.5";
	document.getElementById("radial").style.opacity = "0.5";

	document.getElementById("horizontal").addEventListener("mouseover", horizontalOpacityHigh);
	document.getElementById("horizontal").addEventListener("mouseout", horizontalOpacityLow);

	document.getElementById("vertical").addEventListener("mouseover", verticalOpacityHigh);
	document.getElementById("vertical").addEventListener("mouseout", verticalOpacityLow);

	document.getElementById("diagonal").addEventListener("mouseover", diagonalOpacityHigh);
	document.getElementById("diagonal").addEventListener("mouseout", diagonalOpacityLow);

	document.getElementById("radial").addEventListener("mouseover", radialOpacityHigh);
	document.getElementById("radial").addEventListener("mouseout", radialOpacityLow);
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
			document.getElementById("horizontal").removeEventListener("mouseover", horizontalOpacityHigh);
			document.getElementById("horizontal").removeEventListener("mouseout", horizontalOpacityLow);
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
			document.getElementById("vertical").removeEventListener("mouseover", verticalOpacityHigh);
			document.getElementById("vertical").removeEventListener("mouseout", verticalOpacityLow);
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
			document.getElementById("diagonal").removeEventListener("mouseover", diagonalOpacityHigh);
			document.getElementById("diagonal").removeEventListener("mouseout", diagonalOpacityLow);
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
			document.getElementById("radial").removeEventListener("mouseover", radialOpacityHigh);
			document.getElementById("radial").removeEventListener("mouseout", radialOpacityLow);
			document.getElementById("radial").style.opacity = "1";
			break;
		
		// add color
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

		// remove color
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
			document.getElementById("horizontal").removeEventListener("mouseover", horizontalOpacityHigh);
			document.getElementById("horizontal").removeEventListener("mouseout", horizontalOpacityLow);
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
		opacityLow();
		angleChange();
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
	var headericon = document.getElementById("headericon").classList.contains("active");

	if (headericon != true) {
		document.getElementById("headericon").classList.add("active");
		header.style.background = 
			"linear-gradient(to left, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
		
			css.textContent = header.style.background + ";";
	}
	else {
		document.getElementById("headericon").classList.remove("active");
		header.style.background = 
			"linear-gradient(to left, " 
			+ "gray"
			+ ", " 
			+ "gray" 
			+ ")";
		
			css.textContent = header.style.background + ";";
	}
}

// MAIN
function main() {
	document.getElementById("gradient").style.background = "gray";
	var main = document.getElementById("main");
	var mainicon = document.getElementById("mainicon").classList.contains("active");

	if (mainicon != true) {
		document.getElementById("mainicon").classList.add("active");
		main.style.background = 
			"linear-gradient(to left, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
		
			css.textContent = main.style.background + ";";
	}
	else {
		document.getElementById("mainicon").classList.remove("active");
		main.style.background = 
			"linear-gradient(to left, " 
			+ "gray"
			+ ", " 
			+ "gray" 
			+ ")";
		
			css.textContent = main.style.background + ";";
	}
}

// FOOTER
function footer() {
	document.getElementById("gradient").style.background = "gray";
	var footer = document.getElementById("footer");
	var footericon = document.getElementById("footericon").classList.contains("active");

	if (footericon != true) {
		document.getElementById("footericon").classList.add("active");
		footer.style.background = 
			"linear-gradient(to left, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
		
			css.textContent = footer.style.background + ";";
	}
	else {
		document.getElementById("footericon").classList.remove("active");
		footer.style.background = 
			"linear-gradient(to left, " 
			+ "gray"
			+ ", " 
			+ "gray" 
			+ ")";
		
			css.textContent = footer.style.background + ";";
	}
}