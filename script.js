let txtInput = document.getElementById("input");
let txtResult = document.getElementById("result");
let btnResult = document.getElementById("btn");

function capLetter(valueTxt) {
	let restValue = valueTxt.substr(1, valueTxt.length);
	return valueTxt.charAt(0).toUpperCase() + restValue;
}
	
btnResult.onclick = function() {
	let valueTxt = txtInput.value;
	txtResult.innerHTML = capLetter(valueTxt);
}
