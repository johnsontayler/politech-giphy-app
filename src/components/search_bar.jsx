import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setGif } from '../actions';

class SearchBar extends Component {

  componentWillMount() {
    this.props.setGif('Hamburger');
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.setGif(e.target.search.value);
  };

  render() {
    // const { handleSubmit } = this.props;
    const style = { borderRadius: 0 };

    return (
      <form className="form-inline my-2 my-lg-0"
        onSubmit={this.onSubmit}>
        <p>Search term</p>
        <input className="form-control"
          // component="input"
          name="search"
          placeholder="Hamburger"
          type="text"
          style={style}
          aria-label="Search"
        />
        <button className="btn btn-primary my-2 my-sm-0"
          style={style}
          type="submit">
          Search
        </button>
      </form>
    );
  }
}

// SearchBar = reduxForm({
//   form: 'SearchBar'
// })(SearchBar)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGif: setGif },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SearchBar);
