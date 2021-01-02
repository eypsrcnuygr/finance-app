import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requestMaker from './helpers/requestMaker';
import reqMakerForPokemon from './helpers/requestMakerForPokemon';
import NavBar from './components/Navbar';
import './App.scss';
import Footer from './components/Footer';

function mapStateToProps(state) {
  const {
    value, imageUrl, isFetching, error,
  } = state.FetchPokemonReducer;

  return {
    value, imageUrl, isFetching, error,
  };
}

const mapDispatchToProps = dispatch => ({
  requestMaker: () => dispatch(requestMaker()),
  reqMakerForPokemon: url => dispatch(reqMakerForPokemon(url)),
});

function App(props) {
  const [searchState, setSearchState] = useState('');

  useEffect(() => {
    if (props.isFetching) {
      window.scrollTo(0, 0);
    }
  });

  const handleChange = dataFromChild => {
    setSearchState(dataFromChild);
  };

  const handleClick = props => {
    const {
      requestMaker,
    } = props;
    requestMaker();
  };

  const handleLoadMore = props => {
    const {
      requestMaker,
    } = props;
    requestMaker();
  };

  let renderedComponent;
  let i = -1;
  const { value } = props;
  if (value === null) {
    renderedComponent = (
      <div className="d-flex justify-content-center mt-5">
        <button onClick={() => handleClick(props)} type="button" className="btn btn-danger button-show">Show List</button>
      </div>
    );
  } else {
    const filteredComponent = props.value
      .filter(element => element.name.indexOf(searchState) !== -1);
    const filteredImage = props.imageUrl.filter(element => (
      element.species.name.indexOf(searchState) !== -1
    ));
    renderedComponent = (
      <>
        <div className="d-flex flex-wrap mb-5 mt-5 justify-content-center mx-auto container">
          {
          filteredComponent.map(data => {
            i += 1;
            return (
              <div key={i} className="card pokemon-div-1 text-center col-lg-3 col-12 w-100 rounded shadow-lg bg-white">
                <img src={filteredImage[i].sprites.front_default} alt="pokemon" className="card-img-top" />
                <Link
                  to={data.url}
                  onClick={() => props.reqMakerForPokemon(data.url)}
                >
                  {data.name}
                </Link>
              </div>
            );
          })
}
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-danger my-button font-weight-bold" onClick={() => handleLoadMore(props)}>Load More</button>
        </div>

      </>

    );
  }

  return (
    <>
      <NavBar handleChange={handleChange} value={searchState} />
      { renderedComponent }
      <Footer />
    </>
  );
}

App.propTypes = {
  isFetching: PropTypes.bool,
  value: PropTypes.instanceOf(Object),
  requestMaker: PropTypes.func,
  imageUrl: PropTypes.instanceOf(Array),
  reqMakerForPokemon: PropTypes.func,
};

App.defaultProps = {
  isFetching: false,
  value: {},
  requestMaker: null,
  imageUrl: [],
  reqMakerForPokemon: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
