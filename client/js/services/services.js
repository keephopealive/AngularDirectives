app
.service( 'Book', [ '$rootScope', function( $rootScope ) {
	this.books = [
		{ title: "Magician", author: "Raymond E. Feist" },
		{ title: "The Hobbit", author: "J.R.R Tolkien" }
	];

	this.addBook = function ( book ) {
		service.books.push( book );
		$rootScope.$broadcast( 'books.update' );
	}
}]);