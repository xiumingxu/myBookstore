import React from "react";
import SearchBar from "./lib/SearchBar";
import BookList from "./lib/BookList";
import * as BooksAPI from "./BooksAPI";

class Search extends React.Component {
  state = { bookList: [] };

  inputChangeHandler = e => {
    const query = e.target.value;

    BooksAPI.search(query).then(books => {
      console.log(books);
      if (books !== undefined && books.error === undefined) {
        console.log("here comes");
        this.setState({ bookList: books });
      } else this.setState({ bookList: [] });
    });
  };
  render() {
    return (
      <div>
        <SearchBar
          {...this.props}
          inputChangeHandler={this.inputChangeHandler}
        />
        <div className='bookList'>
          <BookList
            bookList={this.state.bookList}
            // bookList={[]}
            onChangeHandler={this.props.onChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default Search;
