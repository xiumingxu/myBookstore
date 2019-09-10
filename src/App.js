import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Shelf from "./Shelf";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

import {
  Switch,
  Route,
  Link,
  Router
  // etc.
} from "react-router-dom";

import CornerButton from "./lib/CornerButton";

export default class App extends React.Component {
  state = {
    books: []
  };
  // go get the  data
  componentDidMount() {
    BooksAPI.getAll().then(res => {
      // this.setState({ books: res });
      this.setState({ books: res });
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

  search = () => {
    console.log("go to search");
  };

  render() {
    let { books } = this.state;
    // go home

    return (
      <div className='App'>
        {/* <Route exact path='/' component={Shelf}> */}

        <Route
          exact
          path='/'
          render={() => (
            <div>
              <Shelf
                books={this.state.books}
                onChangeHandler={this.onChangeHandler}
              />
              <Link to='/search'>
                <CornerButton changePage={this.search} />
              </Link>
            </div>
          )}
        />

        <Route
          path='/search'
          render={
            ({ history }) => (
              <Search
                goback={() => {
                  history.push("/");
                }}
              />
            )
            // console.log("history", this.props.history)
          }
        />
      </div>
    );
  }
}
