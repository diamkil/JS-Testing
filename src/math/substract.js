function substract(a, b) {
	var result = a - b;
	var resultRounded = result.toFixed(2);
	var resultAsFloat = parseFloat(resultRounded);
	return resultAsFloat;
}
module.exports = substract;
