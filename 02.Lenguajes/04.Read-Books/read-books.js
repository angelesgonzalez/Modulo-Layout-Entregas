function isBookRead(books, titleToSearch) {
	const bookFound = books.find((book) => book.title === titleToSearch);
	return bookFound ? bookFound.isRead : false;
}

const books = [
	{ title: "Harry Potter y la piedra filosofal", isRead: true },
	{ title: "Canción de hielo y fuego", isRead: false },
	{ title: "Devastación", isRead: true },
];

console.log(`%cRead Books             `, "font-weight: bold");
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
