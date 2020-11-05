var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var bodyStyleString = getComputedStyle(body).backgroundImage;

// Hell on earth regex
const regex = /\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?, rgb?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/;
let m;
if ((m = regex.exec(bodyStyleString)) !== null) {
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        /*console.log(`Found match, group ${groupIndex}: ${match}`);*/
    });
}

color1hex = convertRGBtoHex(m[1], m[2], m[3]);
color2hex = convertRGBtoHex(m[5], m[6], m[7]);
color1.value = color1hex;
color2.value = color2hex;

function padStringWithZeros(hex) {
	if (hex.length === 1) {
		return "0" + hex;
	}
	return hex;
}

function convertRGBtoHex(r, g, b) {
	var rString = padStringWithZeros(Number(r).toString(16));
	var gString = padStringWithZeros(Number(g).toString(16));
	var bString = padStringWithZeros(Number(b).toString(16));

	return "#" + rString + gString + bString;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);