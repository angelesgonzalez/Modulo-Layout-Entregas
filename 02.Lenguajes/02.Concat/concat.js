const concat = (arrayA, arrayB) => {
	if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
		return "Error, please introduce two arrays.";
	} else {
		return [...arrayA, ...arrayB];
	}
};

console.log(`%cConcat             `, "font-weight: bold");
console.log(
	`arraysEg = [1,2,3,4,5,6], [7,8] ----> `,
	concat([1, 2, 3, 4, 5, 6], [7, 8]),
);

console.log(`arraysEg = '', [7,8] ----> `, concat("", [7, 8]));


/* -------------------------------------------------------------- */

const concatV2 = (arrayA, ...arrays) => {
	if (!Array.isArray(arrayA)) {
		return "Error, please introduce at least one valid array.";
	} else {
		return [
			...arrayA,
			...arrays.reduce(
				(accumulator, currentArray) => [...accumulator, ...currentArray],
				[],
			),
		];
	}
};

console.log(`%cConcat V2            `, "font-weight: bold");
console.log(
	`arraysEg = [1, 2], [7, 8], [3, 4] ----> `,
	concatV2([1, 2], [7, 8], [3, 4]),
);
