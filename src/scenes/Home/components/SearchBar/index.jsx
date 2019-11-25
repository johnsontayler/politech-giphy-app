//  External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Button from '../../../../components/Button';

//  Actions
import { setGif } from '../../services/setGifs/actions';

class SearchBar extends Component {
  componentDidMount() {
    this.props.setGif('Hamburger');
  }

  onSubmit = (e) => {
    e.preventDefault();
    const term = e.target.search.value

    if (term == "") {
      alert("A word must be submitted");
      return false;
    }

    return this.props.setGif(term);
  };

  render() {
    const style = { borderRadius: 2 };

    return (
      <form
        className="form-inline my-2 my-lg-0"
        onSubmit={this.onSubmit}>
        <p>Search term</p>
        <input
          className="form-control"
          name="search"
          placeholder="Hamburger"
          type="text"
          style={style}
          aria-label="Search"
        />
        <Button
          style={style}
          text="Search" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGif: setGif },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SearchBar);
