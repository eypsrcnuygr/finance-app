/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import requestMaker from './helpers/requestMaker';
import reqMakerForPokemon from './helpers/requestMakerForPokemon';
import NavBar from './components/Navbar';
import './App.css';

function mapStateToProps(state) {
  const {
    value, imageUrl, isFetching, error,
  } = state.FetchPokemonReducer;

  return {
    value, imageUrl, isFetching, error,
  };
}

const mapDispatchToProps = dispatch => ({
  requestMaker: (value, imageUrl) => dispatch(requestMaker(value, imageUrl)),
  reqMakerForPokemon: url => dispatch(reqMakerForPokemon(url)),
});

function App(props) {
  const [searchState, setSearchState] = useState('');

  useEffect(() => {
    window.onscroll = () => {
      const {
        value, imageUrl, requestMaker,
      } = props;
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
        requestMaker();
      }
    };
  }, []);

  const handleChange = dataFromChild => {
    setSearchState(dataFromChild);
  };

  const handleClick = props => {
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
    renderedComponent = (
      <div className="styledDiv">
        {
          filteredComponent.map(data => {
            i += 1;
            return (
              <div key={i}>
                <Link
                  to={data.url}
                  onClick={() => props.reqMakerForPokemon(data.url)}
                >
                  {data.name}
                </Link>
                {' '}
                <p>{data.url}</p>
                <img src={props.imageUrl[i].sprites.front_default} alt="pokemon" />
              </div>
            );
          })
}
      </div>
    );
  }

  return (
    <>
      <NavBar handleChange={handleChange} value={searchState} />
      { renderedComponent }
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
