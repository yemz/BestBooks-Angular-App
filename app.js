(function() {
  //link to books.js through book-directives
  var app = angular.module('bookStore', ['book-directives']);

  //display books
  app.controller('BookController', function(){
    //initialize variable products
    this.books = books;
    
  });

   //display reviews
  app.controller('ReviewController', function(){
    this.review = {}; //empty object

    //add review after submiting form
    this.addReview = function(book) {
   
      //add date of the review
      this.review.createdOn = Date.now();

      //push review into array
      book.reviews.push(this.review);

      //reset live preview and form
      this.review = {};
    };
  });


  //initialize array variable
  var books = [
    {
      name: 'Don Quixote',
      description: "Don Quixote - is one of the most influential work of literature from the Spanish Golden Age.",
      author: "Miguel de Cervantes",
      language: "Spanish",
      published: 1605,
      genre: "Fiction (Novel)",
      sales: "500 million",
      images: [
        "images/book-01.jpg",
        "images/book-055.gif",
        "images/book-099.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this book!",
        author: "joe@goodbooks.org",
        createdOn: 997490980889 
      },  {
        stars: 4,
        body: "Great book!",
        author: "tim@yahoo.org",
        createdOn: 1397490980837
      }]
    },  {
      name: 'A Tale of Two Cities',
      description: "A Tale of Two Cities - is a historical novel set in London and Paris before and during the French Revolution.",
      author: "Charles Dickens",
      language: "English",
      published: 1859,
      genre: "Fiction (Novel)",
      sales: "200 million",
      images: [
        "images/book-02.jpg",
        "images/gem-033.gif",
        "images/gem-044.gif"
      ],
      reviews: [{
        stars: 3,
        body: "This book is OK.",
        author: "bob@example.org",
        createdOn: 1047490980837
      },  {
        stars: 4,
        body: "Incredible!",
        author: "ann@example.org",
        createdOn: 1057490980837
      }]
    },  {
      name: 'The Lord of the Rings',
      description: "The Lord of the Rings - is a fantasy novel that began as a sequel to Tolkien's fantasy novel The Hobbit. ",
      author: "J.R.R. Tolkien",
      language: "English",
      published: 1954,
      genre: "Fiction Fantasy (Novel)",
      sales: "150 million",
      images: [
        "images/book-03.jpg",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 5,
        body: "Lord of the Rings... Best book ever read before!",
        author: "joe@example.org",
        createdOn: 1067490980837
      },  {
        stars: 5,
        body: "Greattt Book!!!",
        author: "adam@example.org",
        createdOn: 1077490980837
      },  {
        stars: 3,
        body: "Liked more Harry Potter!",
        author: "dan@example.org",
        createdOn: 1087490980837
      }]
    },  {
      name: 'Le Petit Prince (The Little Prince)',
      description: "The Little Prince - is one of the most translated books in the world with thoughtful situations about life.",
      author: "Antoine de Saint-Exupery",
      language: "French",
      published: 1943,
      genre: "Fiction (Novel)",
      sales: "140 million",
      images: [
        "images/book-04.jpg",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this book!",
        author: "sam@example.org",
        createdOn: 1007490980837
      },  {
        stars: 5,
        body: "Love it!!!",
        author: "ed@example.org",
        createdOn: 1037490980837
      },  {
        stars: 5,
        body: "Never tired of reading this book.  Recommended for all ages!",
        author: "mary@example.org",
        createdOn: 1057490980837
   }]
      },  {
      name: "Harry Potter and the Philosopher's Stone",
      description: "Harry Potter and the Philosopher's Stone - is a fantasy novel.  This is the first part of Harry Potter series.",
      author: "J. K. Rowling",
      language: "English",
      published: 1997,
      genre: "Fiction Fantasy (Novel)",
      sales: "120 million",
      images: [
        "images/book-05.jpg",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 5,
        body: "Harry Potter I'm your fan #1!",
        author: "matt@example.org",
        createdOn: 1067490980837
      },  {
        stars: 4,
        body: "Great Book!",
        author: "valery@example.org",
        createdOn: 1077490980837
      },  {
        stars: 3,
        body: "Can live without it.",
        author: "andrea@example.org",
        createdOn: 1097490980837
   }]
      },  {
      name: 'The Hobbit',
      description: "The Hobbit - is a children's fantasy novel.  It was published in 1937.",
      author: "J.R.R. Tolkien",
      language: "English",
      published: 1937,
      genre: "Fiction Children's Fantasy (Novel)",
      sales: "100 million",
      images: [
        "images/book-06.jpg",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this book, is legend!",
        author: "mark@example.org",
        createdOn: 1067490980837
      },  {
        stars: 4,
        body: "This book is too good!",
        author: "rod@example.org",
        createdOn: 1077490980937
      },  {
        stars: 4,
        body: "Super excited to start reading this book!",
        author: "yuyo@example.org",
        createdOn: 1207490960837
   }]
    },  {
      name: 'And Then There Were None',
      description: "And Then There Were None -  it is the world's best-selling mystery novel and one of the best-selling books of all time.",
      author: "Agatha Christie",
      language: "English",
      published: 1939,
      genre: "Fiction Mystery (Novel)",
      sales: "100 million",
      images: [
        "images/book-07.jpg",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 5,
        body: "Can't stop reading it!",
        author: "fred@example.org",
        createdOn: 1117490980837
      },  {
        stars: 4,
        body: "Nice book!",
        author: "chris@example.org",
        createdOn: 1227490980837
      },  {
        stars: 4,
        body: "Great story!",
        author: "sandy@example.org",
        createdOn: 1287490980837
   }]
    }
  ];



})();//main function
