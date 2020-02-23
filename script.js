var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var body = document.getElementById("gradient");

var header = document.getElementById("header");
var main = document.getElementById("main");
var footer = document.getElementById("footer");

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

headerFunc();
mainFunc();
footerFunc();
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

function angleOpacityLow() {
	document.getElementById("angle").style.opacity = "0.5";
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

function angleOpacityHigh() {
	document.getElementById("angle").style.opacity = "1";
}

function opacityLow() {
	document.getElementById("horizontal").style.opacity = "0.5";
	document.getElementById("vertical").style.opacity = "0.5";
	document.getElementById("diagonal").style.opacity = "0.5";
	document.getElementById("radial").style.opacity = "0.5";
	document.getElementById("angle").style.opacity = "0.5";

	document.getElementById("horizontal").addEventListener("mouseover", horizontalOpacityHigh);
	document.getElementById("horizontal").addEventListener("mouseout", horizontalOpacityLow);

	document.getElementById("vertical").addEventListener("mouseover", verticalOpacityHigh);
	document.getElementById("vertical").addEventListener("mouseout", verticalOpacityLow);

	document.getElementById("diagonal").addEventListener("mouseover", diagonalOpacityHigh);
	document.getElementById("diagonal").addEventListener("mouseout", diagonalOpacityLow);

	document.getElementById("radial").addEventListener("mouseover", radialOpacityHigh);
	document.getElementById("radial").addEventListener("mouseout", radialOpacityLow);

	document.getElementById("angle").addEventListener("mouseover", angleOpacityHigh);
	document.getElementById("angle").addEventListener("mouseout", angleOpacityLow);
}

function setGradient(number) {
	var headericon = document.getElementById("headericon").classList.contains("active");
	var mainicon = document.getElementById("mainicon").classList.contains("active");
	var footericon = document.getElementById("footericon").classList.contains("active");

	switch (number) {
		// horizontal
		case 1:
			// header
			if (headericon != true) {
				header.style.background = 
					"linear-gradient(to left, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				header.style.background = 
					"linear-gradient(to left, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			// main
			if (mainicon != true) {
				main.style.background = 
					"linear-gradient(to left, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				main.style.background = 
					"linear-gradient(to left, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			// footer
			if (footericon != true) {
				footer.style.background = 
					"linear-gradient(to left, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				footer.style.background = 
					"linear-gradient(to left, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			if (headericon != false) {
				css.textContent = header.style.background + ";";
			}
			else if (mainicon != false) {
				css.textContent = main.style.background + ";";
			}
			else if (footericon != false) {
				css.textContent = footer.style.background + ";";
			}
			else {
				css.textContent = "Please select a section!";
			}

			opacityLow();
			angleClose();
			document.getElementById("horizontal").removeEventListener("mouseover", horizontalOpacityHigh);
			document.getElementById("horizontal").removeEventListener("mouseout", horizontalOpacityLow);
			document.getElementById("horizontal").style.opacity = "1";
			break;

		// vertical
		case 2:
			// header
			if (headericon != true) {
				header.style.background = 
					"linear-gradient(to top, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				header.style.background = 
					"linear-gradient(to top, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			// main
			if (mainicon != true) {
				main.style.background = 
					"linear-gradient(to top, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				main.style.background = 
					"linear-gradient(to top, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			// footer
			if (footericon != true) {
				footer.style.background = 
					"linear-gradient(to top, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				footer.style.background = 
					"linear-gradient(to top, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			if (headericon != false) {
				css.textContent = header.style.background + ";";
			}
			else if (mainicon != false) {
				css.textContent = main.style.background + ";";
			}
			else if (footericon != false) {
				css.textContent = footer.style.background + ";";
			}
			else {
				css.textContent = "Please select a section!";
			}

			opacityLow();
			angleClose();
			document.getElementById("vertical").removeEventListener("mouseover", verticalOpacityHigh);
			document.getElementById("vertical").removeEventListener("mouseout", verticalOpacityLow);
			document.getElementById("vertical").style.opacity = "1";
			break;

		// diagonal
		case 3:
			// header
			if (headericon != true) {
				header.style.background = 
					"linear-gradient(315deg, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				header.style.background = 
					"linear-gradient(315deg, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			// main
			if (mainicon != true) {
				main.style.background = 
					"linear-gradient(315deg, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				main.style.background = 
					"linear-gradient(315deg, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			// footer
			if (footericon != true) {
				footer.style.background = 
					"linear-gradient(315deg, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				footer.style.background = 
					"linear-gradient(315deg, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			if (headericon != false) {
				css.textContent = header.style.background + ";";
			}
			else if (mainicon != false) {
				css.textContent = main.style.background + ";";
			}
			else if (footericon != false) {
				css.textContent = footer.style.background + ";";
			}
			else {
				css.textContent = "Please select a section!";
			}

			opacityLow();
			angleClose();
			document.getElementById("diagonal").removeEventListener("mouseover", diagonalOpacityHigh);
			document.getElementById("diagonal").removeEventListener("mouseout", diagonalOpacityLow);
			document.getElementById("diagonal").style.opacity = "1";
			break;

		// radial
		case 4:
			// header
			if (headericon != true) {
				header.style.background = 
					"radial-gradient("
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				header.style.background = 
					"radial-gradient(" 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			// main
			if (mainicon != true) {
				main.style.background = 
					"radial-gradient(" 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				main.style.background = 
					"radial-gradient("
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			// footer
			if (footericon != true) {
				footer.style.background = 
					"radial-gradient(" 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			else {
				footer.style.background = 
					"radial-gradient(" 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
			}

			if (headericon != false) {
				css.textContent = header.style.background + ";";
			}
			else if (mainicon != false) {
				css.textContent = main.style.background + ";";
			}
			else if (footericon != false) {
				css.textContent = footer.style.background + ";";
			}
			else {
				css.textContent = "Please select a section!";
			}

			opacityLow();
			angleClose();
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
			// header
			if (headericon != false) {
				header.style.background = 
					"linear-gradient(to left, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
				
					// css.textContent = header.style.background + ";";
			}
			else {
				header.style.background = 
					"linear-gradient(to left, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}
			
			// main
			if (mainicon != false) {
				main.style.background = 
					"linear-gradient(to left, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
				
					// css.textContent = main.style.background + ";";
			}
			else {
				main.style.background = 
					"linear-gradient(to left, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}

			// footer
			if (footericon != false) {
				footer.style.background = 
					"linear-gradient(to left, " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";
				
					// css.textContent = footer.style.background + ";";
			}
			else {
				footer.style.background = 
					"linear-gradient(to left, " 
					+ "gray"
					+ ", " 
					+ "gray" 
					+ ")";
			}

			if (headericon != false) {
				css.textContent = header.style.background + ";";
			}
			else if (mainicon != false) {
				css.textContent = main.style.background + ";";
			}
			else if (footericon != false) {
				css.textContent = footer.style.background + ";";
			}
			else {
				css.textContent = "Please select a section!";
			}
			
			opacityLow();
			document.getElementById("horizontal").removeEventListener("mouseover", horizontalOpacityHigh);
			document.getElementById("horizontal").removeEventListener("mouseout", horizontalOpacityLow);
			document.getElementById("horizontal").style.opacity = "1";
			break;
	}
}

// ANGLE
function angleFunc() {
	var visible = document.getElementById("anglepick").style.display;
	if (visible === "block") {
		angleClose();
		angleChange();
	}
	else {
		document.getElementById("anglepick").style.display = "block";
		
		opacityLow();
		document.getElementById("angle").style.opacity = "1";
		document.getElementById("angle").removeEventListener("mouseover", angleOpacityHigh);
		document.getElementById("angle").removeEventListener("mouseout", angleOpacityLow);
		angleChange();
	}
}

document.getElementById("angleinput").addEventListener("input", angleChange);
function angleChange() {
	angle = document.getElementById("angleinput").value;
	var headericon = document.getElementById("headericon").classList.contains("active");
	var mainicon = document.getElementById("mainicon").classList.contains("active");
	var footericon = document.getElementById("footericon").classList.contains("active");
	
	// header
	if (headericon != true) {
		header.style.background = 
			"linear-gradient(315deg, " 
			+ "gray"
			+ ", " 
			+ "gray" 
			+ ")";
	}
	else {
		header.style.background = 
			"linear-gradient("
			+ angle
			+ "deg, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
	}

	// main
	if (mainicon != true) {
		main.style.background = 
			"linear-gradient(315deg, " 
			+ "gray"
			+ ", " 
			+ "gray" 
			+ ")";
	}
	else {
		main.style.background = 
			"linear-gradient("
			+ angle
			+ "deg, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
	}

	// footer
	if (footericon != true) {
		footer.style.background = 
			"linear-gradient(315deg, " 
			+ "gray"
			+ ", " 
			+ "gray" 
			+ ")";
	}
	else {
		footer.style.background = 
			"linear-gradient("
			+ angle
			+ "deg, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";
	}

	if (headericon != false) {
		css.textContent = header.style.background + ";";
	}
	else if (mainicon != false) {
		css.textContent = main.style.background + ";";
	}
	else if (footericon != false) {
		css.textContent = footer.style.background + ";";
	}
	else {
		css.textContent = "Please select a section!";
	}
}

function angleClose() {
	document.getElementById("anglepick").style.display = "none";
		document.getElementById("angle").addEventListener("mouseover", angleOpacityHigh);
		document.getElementById("angle").addEventListener("mouseout", angleOpacityLow);
		document.getElementById("angleinput").value = "0";
}

// HEADER
function headerFunc() {
	var headericon = document.getElementById("headericon").classList.contains("active");
	var horizontalcheck = document.getElementById("horizontal").style.opacity;
	var verticalcheck = document.getElementById("vertical").style.opacity;
	var diagonalcheck = document.getElementById("diagonal").style.opacity;
	var radialcheck = document.getElementById("radial").style.opacity;
	var anglecheck = document.getElementById("angle").style.opacity;

	if (headericon != true) {
		document.getElementById("headericon").classList.add("active");

		if (horizontalcheck == "1") {
			setGradient(1);
		}
		else if (verticalcheck == "1") {
			setGradient(2);
		}
		else if (diagonalcheck == "1") {
			setGradient(3);
		}
		else if (radialcheck == "1") {
			setGradient(4);
		}
		else if (anglecheck == "1") {
			angleChange();
		}
	}
	else {
		document.getElementById("headericon").classList.remove("active");
		
		if (horizontalcheck == "1") {
			setGradient(1);
		}
		else if (verticalcheck == "1") {
			setGradient(2);
		}
		else if (diagonalcheck == "1") {
			setGradient(3);
		}
		else if (radialcheck == "1") {
			setGradient(4);
		}
		else if (anglecheck == "1") {
			angleChange();
		}
	}
}

// MAIN
function mainFunc() {
	var mainicon = document.getElementById("mainicon").classList.contains("active");
	var horizontalcheck = document.getElementById("horizontal").style.opacity;
	var verticalcheck = document.getElementById("vertical").style.opacity;
	var diagonalcheck = document.getElementById("diagonal").style.opacity;
	var radialcheck = document.getElementById("radial").style.opacity;
	var anglecheck = document.getElementById("angle").style.opacity;

	if (mainicon != true) {
		document.getElementById("mainicon").classList.add("active");

		if (horizontalcheck == "1") {
			setGradient(1);
		}
		else if (verticalcheck == "1") {
			setGradient(2);
		}
		else if (diagonalcheck == "1") {
			setGradient(3);
		}
		else if (radialcheck == "1") {
			setGradient(4);
		}
		else if (anglecheck == "1") {
			angleChange();
		}
	}
	else {
		document.getElementById("mainicon").classList.remove("active");
		
		if (horizontalcheck == "1") {
			setGradient(1);
		}
		else if (verticalcheck == "1") {
			setGradient(2);
		}
		else if (diagonalcheck == "1") {
			setGradient(3);
		}
		else if (radialcheck == "1") {
			setGradient(4);
		}
		else if (anglecheck == "1") {
			angleChange();
		}
	}
}

// FOOTER
function footerFunc() {
	var footericon = document.getElementById("footericon").classList.contains("active");
	var horizontalcheck = document.getElementById("horizontal").style.opacity;
	var verticalcheck = document.getElementById("vertical").style.opacity;
	var diagonalcheck = document.getElementById("diagonal").style.opacity;
	var radialcheck = document.getElementById("radial").style.opacity;
	var anglecheck = document.getElementById("angle").style.opacity;

	if (footericon != true) {
		document.getElementById("footericon").classList.add("active");

		if (horizontalcheck == "1") {
			setGradient(1);
		}
		else if (verticalcheck == "1") {
			setGradient(2);
		}
		else if (diagonalcheck == "1") {
			setGradient(3);
		}
		else if (radialcheck == "1") {
			setGradient(4);
		}
		else if (anglecheck == "1") {
			angleChange();
		}
	}
	else {
		document.getElementById("footericon").classList.remove("active");
		
		if (horizontalcheck == "1") {
			setGradient(1);
		}
		else if (verticalcheck == "1") {
			setGradient(2);
		}
		else if (diagonalcheck == "1") {
			setGradient(3);
		}
		else if (radialcheck == "1") {
			setGradient(4);
		}
		else if (anglecheck == "1") {
			angleChange();
		}
	}
}
