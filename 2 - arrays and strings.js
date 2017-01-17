/*
	Arrays and strings
*/

//1.1

const isUnique = word => {
	let	uniqueCheck = true;
	let usedLetters = [];
	word.split("").forEach(letter => {
		if (uniqueCheck) {
			if (usedLetters.includes(letter)) {
				uniqueCheck = false;
			}
			usedLetters.push(letter);
		}
	});
	return uniqueCheck;
};

//1.2

const isPermutation = (firstString, secondString) => {
	if (firstString.length !== secondString.length) {
		return false;
	}

	const firstStringCounts = getLetterCounts(firstString);
	const secondStringCounts = getLetterCounts(secondString);

	return Object.keys(firstStringCounts).every(key =>
		secondStringCounts[key] === firstStringCounts[key]
	);
};

const getLetterCounts = word => (
	word.split("").reduce((fullCounts, letter) => {
		const letterCount = fullCounts[letter] ? fullCounts[letter] + 1 : 1;
		fullCounts[letter] = letterCount;
		return fullCounts;
	}, {});
);


//1.3

const urlifyString = (word, stringLength) => {
	let string = word.split("");
	let spaceCount = 0;
	for (let i = 0; i < stringLength; i++) {
		if (string[i] === " ") {
			spaceCount++;
		}
	}

	if (spaceCount > 0) {
		const newLength = stringLength + spaceCount * 2;

		for (let i = stringLength - 1, j = newLength - 1; i >= 0; i--, j--) {
			if (string[i] === " ") {
				string[j] = "0";
				string[j - 1] = "2";
				string[j - 2] = "%";
				j -= 2;
			}
			else {
				string[j] = string[i];
			}
		}
	}
	return string.join("");
};

const easyUrlify = (string, stringLength) => {
	let stringArray = string.split("");
	for (let i = 0; i < stringLength; i++) {
		if (stringArray[i] === " ") {
			stringArray[i] = "%20";
		}
	}
	return stringArray.join("");
};
