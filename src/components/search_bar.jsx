import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const style = {
      borderRadius: 0
    }

    return (
      <form className="form-inline my-2 my-lg-0">
        <p>Search term</p>
        <input className="form-control" style={style} type="search"
          placeholder="Hamburger" aria-label="Search" />
        <button className="btn btn-primary my-2 my-sm-0" style={style}
          type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;