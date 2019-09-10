import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./lib/BookList";
import * as BooksAPI from "./BooksAPI";
import Heading from "./lib/Heading";
import SubHeading from "./lib/Subheading";

const optionList = [
  { label: "Reading", value: "reading" },
  { label: "Want to Read", value: "wantToRead" },
  { label: "Done", value: "done" }
];

const data = [
  {
    imgsrc: "https://via.placeholder.com/150x200",
    author: "Harper",
    bookName: "To Kill a Mockingbird",
    optionList
  },
  {
    imgsrc: "https://via.placeholder.com/150x200",
    author: "B",
    bookName: "abc",
    optionList
  },
  {
    imgsrc: "https://via.placeholder.com/150x200",
    author: "ablkajdslfjasdljf asdf",
    bookName: "abclajdslf ja ad",
    optionList
  }
];

class App extends React.Component {
  state = {
    books: []
  };
  // go get the  data
  componentDidMount() {
    console.log("got mount");
    BooksAPI.getAll().then(res => {
      // this.setState({ books: res });
      this.setState({ books: res });

      // value:

      // 0:
      // allowAnonLogging: false
      // authors: ["Liaquat Ahamed"]
      // averageRating: 4.5
      // canonicalVolumeLink: "https://books.google.com/books/about/Lords_of_Finance.html?hl=&id=74XNzF_al3MC"
      // categories: ["Business & Economics"]
      // contentVersion: "1.0.0.0.preview.0"
      // description: "Argues that the stock market crash of 1929 and subsequent Depression occurred as a result of poor decisions on the part of four central bankers who jointly attempted to reconstruct international finance by reinstating the gold standard."
      // id: "74XNzF_al3MC"
      // imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=74XNzF_al…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=74XNzF_al…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" }
      // industryIdentifiers: (2)[{ … }, { … }]
      // infoLink: "http://books.google.com/books?id=74XNzF_al3MC&dq=finance&hl=&source=gbs_api"
      // language: "en"
      // maturityRating: "NOT_MATURE"
      // pageCount: 564
      // previewLink: "http://books.google.com/books?id=74XNzF_al3MC&printsec=frontcover&dq=finance&hl=&cd=1&source=gbs_api"
      // printType: "BOOK"
      // publishedDate: "2009-01"
      // publisher: "Penguin"
      // ratingsCount: 14
      // readingModes: { text: false, image: false }
      // shelf: "currentlyReading"
      // subtitle: "The Bankers Who Broke the World"
      // title: "Lords of Finance"
    });
  }

  // change the this problem
  onChangeHandler = (value, b) => {
    BooksAPI.update(b, value).then(res =>
      this.setState(preState => {
        const newBooks = preState.books.map(book => {
          if (book.title === b.title) book.shelf = value;
          return book;
        });
        return { books: newBooks };
      })
    );
  };

  render() {
    let { books } = this.state;
    return (
      <div className='App'>
        <Heading text='My Reads' />
        <SubHeading text='Currently Reading' />
        <BookList
          bookList={books.filter(book => book.shelf === "currentlyReading")}
          onChangeHandler={this.onChangeHandler}
        />
        <SubHeading text='Want to Read' />
        <BookList
          bookList={books.filter(book => book.shelf === "wantToRead")}
          onChangeHandler={this.onChangeHandler}
        />
        <SubHeading text='Read' />
        <BookList
          bookList={books.filter(book => book.shelf === "read")}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
}

export default App;
