/* -------   CLONE  ----------  */

function clone(source) {
	if (!source) {
		return "Source should not accept null or undefined";
	} else return { ...source };
}

console.log(`%cCLONE             `, "font-weight: bold");
console.log(
	`objEng {street: 'Carretera Nacional', number: 23} ----> `,
	clone({ street: "Carretera Nacional", number: 23 }),
);

/* -------   MERGE  ----------  */

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
	return { ...target, ...source };
}

console.log(`%cMERGE            `, "font-weight: bold");
console.log(
	`objEng a = { name: "Maria", surname: "Ibañez", country: "SPA" }
	 { name: "Luisa", age: 31, married: true } ----> `,
	merge(a, b),
);
