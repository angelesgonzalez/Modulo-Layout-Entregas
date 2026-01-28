const head = (array) => {
	if (!Array.isArray(array) || array.length === 0) {
		return "Error, please introduce an Array with at least one element.";
	}
	const [firstElement] = array;
	return firstElement;
};

console.log(`%cHead             `, "font-weight: bold");
console.log(`arrayEg = [1,2,3,4,5,6] ----> `, head([1, 2, 3, 4, 5, 6]));
console.log(`arrayEg = [] ----> `, head([]));
console.log(`not array = '' ----> `, head(""));

const tail = (array) => {
	if (Array.isArray(array) && array.length > 1) {
		const [, ...tailArray] = array;
		return tailArray;
	} else return "Error, please introduce an Array with at least two elements.";
};

console.log(`%cTail             `, "font-weight: bold");
console.log(`arrayEg = [1,2,3,4,5,6] ----> `, tail([1, 2, 3, 4, 5, 6]));
console.log(`arrayEg = [1] ----> `, tail([1]));
console.log(`not array = '' ----> `, tail(""));

const init = (array) => {
	if (!Array.isArray(array) || array.length <= 1) {
		return "Error, please introduce an Array with at least two elements.";
	}
	return array.slice(0, -1);
};

console.log(`%cInit             `, "font-weight: bold");
console.log(`arrayEg = [1,2,3,4,5,6] ----> `, init([1, 2, 3, 4, 5, 6]));
console.log(`arrayEg = [1] ----> `, init([1]));
console.log(`not array = '' ----> `, init(""));

const last = (array) => {
	if (!Array.isArray(array) || array.length <= 1) {
		return "Error, please introduce an Array with at least two elements.";
	}
	return array.slice(-1);
};

console.log(`%cLast             `, "font-weight: bold");
console.log(`arrayEg = [1,2,3,4,5,6] ----> `, last([1, 2, 3, 4, 5, 6]));
console.log(`arrayEg = [1,2] ----> `, last([1, 2]));
console.log(`arrayEg = [1] ----> `, last([1]));
console.log(`not array = '' ----> `, last(""));
