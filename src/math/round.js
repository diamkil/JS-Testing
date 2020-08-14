function round(a, b) {
	var numberToRound = a;
	var decimalsToRound;
	if (b) {
		decimalsToRound = b;
	}
	else {
		decimalsToRound = 2;
	}
	var resultRounded = numberToRound.toFixed(decimalsToRound);
	var resultAsFloat = parseFloat(resultRounded);
	var finalResult = resultAsFloat;
	return finalResult;
}
module.exports = round;
