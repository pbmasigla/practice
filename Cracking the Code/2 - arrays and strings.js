/*@flow*/
/*
	Arrays and strings
*/

//1.1

const isUnique = (word: string) => {
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

const isPermutation = (firstString: string, secondString: string) => {
	if (firstString.length !== secondString.length) {
		return false;
	}

	const firstStringCounts = getLetterCounts(firstString);
	const secondStringCounts = getLetterCounts(secondString);

	return Object.keys(firstStringCounts).every(key =>
		secondStringCounts[key] === firstStringCounts[key]
	);
};

const getLetterCounts = (word: string) => (
	word.split("").reduce((fullCounts, letter) => {
		const letterCount = fullCounts[letter] ? fullCounts[letter] + 1 : 1;
		fullCounts[letter] = letterCount;
		return fullCounts;
	}, {});
);


//1.3

const urlifyString = (word: string, stringLength: number) => {
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

const easyUrlify = (string: string, stringLength: number) => {
	let stringArray = string.split("");
	for (let i = 0; i < stringLength; i++) {
		if (stringArray[i] === " ") {
			stringArray[i] = "%20";
		}
	}
	return stringArray.join("");
};


//1.4

const isPermutationPalindrome = (word: string) => {
	const letterCounts = getLetterCounts(word.replace(" ", ""));

	const oddCount = Object.values(letterCounts).reduce((count, letterCount) => {
		if (letterCount % 2 === 1) {
			count++;
		}
		return count;
	}, 0);

	return oddCount <= 1;
};



//1.5

const isOneEdit = (firstString: string, secondString: string) => {
	if (Math.abs(firstString.length - secondString.length) <= 1) {
		let isEdited = true;
		let numChanges = 0;
		for (let i = 0, j = 0; i < firstString.length && j < secondString.length; i++, j++) {
			if (isEdited && firstString[i] !== secondString[j]) {
				numChanges++;
				if (firstString.length < secondString.length) {
					j++;
				}
				else if (firstString.length > secondString.length) {
					j--;
				}
			}
		}
		return isEdited && numChanges <= 1;
	}
	return false;
};



// 1.6

const compressString = (string: string) => {
	let newString = "";
	let index = 0;
	while (index < string.length) {
		let checkIndex = index + 1;
		while (string[index] === string[checkIndex]) {
			checkIndex++;
		}

		newString = `${newString}${string[index]}${checkIndex - index}`;
		index = checkIndex;
	}
	return newString;
};


// 1.7

/*
	Matrix
	[
		[A, B, C ,D],
		[E, F, G, H],
		[I, J, K, L]
	]
	=>
	[
		[D, H, L],
		[C, G, K],
		[B, F, J],
		[A, E, I]
	]

	newRows = 4;
	newCols = 3;
*/
const rotateImage = (image: Array<any>) => {
	if (!image || image.length <= 1) {
		return image;
	}

	const numRows = image.length;

	for (let x = 0; x < numRows / 2; x++) {
		const first = x;
		const last = numRows - x - 1;

		for (let i = first; i < last; i++) {
			const offset = i - first;
			const top = image[first][i];
			image[first][i] = image[last - offset][first];
			image[last - offset][first] = image[last][last - offset];
			image[last][last - offset] = image[i][last];
			image[i][last] = top;
		}
	}
};


const setToZero = (matrix: Array<any>) => {
	let flagged = [];

	return matrix.reduce((newMatrix, row) => {

	}, matrix);
};

const setRowsZero = (matrix: Array<any>, row: number) => {
	for (let y = 0; y < matrix.length; y++) {
		matrix[y][row] = 0;
	}
	return matrix;
};

const setColsZero = (matrix: Array<any>, col: number) => {
	let newCol = [];
	for (let i = 0; i < matrix[col].length; i++) {
		newCol.push(0);
	}
	matrix[col] = newCol;
	return matrix;
};
