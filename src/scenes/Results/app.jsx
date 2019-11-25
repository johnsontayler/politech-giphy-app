//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  Components+Containers
import GifConfetti from './components/GifConfetti';
import Banner from '../../components/Banner';
import WeirdnessResults from './containers/WeirdnessResults';
import Button from '../../components/Button'

//  Actions
import { toggleConfetti } from './services/setResults/actions';

class App extends Component {

  componentDidMount() {
    if (this.props.results) {
      setTimeout(() => this.props.toggleConfetti(), 500);
    }
  }

  render() {
    const { gifsLiked } = this.props

    return (
      <div>
        <GifConfetti />
        <Banner />
        <div className="results">
          <WeirdnessResults />
          <Link to={{
            pathname: "/",
            state: { gifsLiked: gifsLiked }
          }}>
            <Button
              handleClick={() => this.props.toggleConfetti()}
              text="START OVER"
            />
          </Link>
        </div>
      </div >
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleConfetti: toggleConfetti
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    gifsLiked: state.gifs.liked,
    results: state.results
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
