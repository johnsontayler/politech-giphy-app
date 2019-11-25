//  External modules
import React from 'react';

// Components+Containers
import Banner from '../../components/Banner';
import SearchBar from './components/SearchBar';
import GifResult from './containers/GifResult';
import WeirdnessSlider from './containers/WeirdnessSlider';
import WeirdnessCalculator from './containers/WeirdnessCalculator';

const App = (props) => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="left-scene">
          <div className="search-container">
            <p>
              Find out how weird you are by selecting the GIFs that make
              you laugh. We'll show you the latest weird ones to start,
              but you can move the slider to make them weirder.
            </p>
            <p>
              When you find a GIF that you like, press the
              <i> Like </i>
              button. Once you like 5 GIFs, we'll show you how
              weird you are.
            </p>
            <SearchBar />
          </div>
          <div className="gif-result">
            <h3>YOUR RESULT</h3>
            <GifResult />
            <WeirdnessSlider />
          </div>
        </div>
        <div className="right-scene">
          <h3>YOUR LIKED GIFS</h3>
          <WeirdnessCalculator />
        </div>
      </div>
    </div >
  );
}

export default App;
