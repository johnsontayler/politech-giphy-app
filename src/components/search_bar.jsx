import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitTerm } from '../actions';

let SearchBar = (props) => {
  const { handleSubmit } = props;
  const style = { borderRadius: 0 };

  return (
    <form className="form-inline my-2 my-lg-0"
      onSubmit={handleSubmit(submitTerm)}>
      <p>Search term</p>
      <Field className="form-control"
        component="input"
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

SearchBar = reduxForm({
  form: 'SearchBar'
})(SearchBar)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { submitTerm: submitTerm },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SearchBar);
