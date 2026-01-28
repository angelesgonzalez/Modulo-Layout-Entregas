interface Book {
	title: String;
	isRead: Boolean;
}

function isBookReadV2(books: Book[], titleToSearch: Book["title"]) {
	const bookFound = books.find((book) => book.title === titleToSearch);
	return bookFound ? bookFound.isRead : false;
}

// console.log(isBookReadV2(books, "Devastación")); // true
// console.log(isBookReadV2(books, "Canción de hielo y fuego")); // false
// console.log(isBookReadV2(books, "Los Pilares de la Tierra")); // false
