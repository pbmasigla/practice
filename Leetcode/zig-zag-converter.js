const convert = (s, numRows) => {
	const chars = s.split("");
    const charsLength = chars.length;
	let rowStrings = [];
	for (let i = 0; i < numRows; i++) {
		rowStrings.push("");
	}

	let i = 0;
	while (i < chars.length) {
		for (let rowIndex = 0; rowIndex < numRows && i < charsLength; rowIndex++) {
			rowStrings[rowIndex] += `${chars[i]}`;
			i++;
		}

		for (let reverseRowIndex = numRows - 2; reverseRowIndex > 0 && i < charsLength; reverseRowIndex--) {
			rowStrings[reverseRowIndex] += `${chars[i]}`;
			i++;
		}
	}

	return rowStrings.reduce((combined, line) => `${combined}${line}`);
};

console.log(convert("PAYPALISHIRING", 3));