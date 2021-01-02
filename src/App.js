/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
      value, imageUrl, requestMaker,
    } = props;
    requestMaker();
  };

  const handleLoadMore = props => {
    const {
      value, imageUrl, requestMaker,
    } = props;
    requestMaker();
  };

  let renderedComponent;
  let i = -1;
  if (props.value === null) {
    renderedComponent = (
      <div>
        <button onClick={() => handleClick(props)} type="button">Show List</button>
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
        <div className="d-flex flex-wrap mb-5 justify-content-center mx-auto container">
          {
          filteredComponent.map(data => {
            i += 1;
            return (
              <div key={i} className="card pokemon-div-1 text-center col-lg-3 col-12 w-100">
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
          <button type="button" className="btn btn-primary my-button" onClick={() => handleLoadMore(props)}>Load More</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
