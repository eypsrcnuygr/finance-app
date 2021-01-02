/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { useEffect } from 'react';
import reqMakerForPokemon from '../helpers/requestMakerForPokemon';
import NavBar from './Navbar';
import Footer from './Footer';

function mapStateToProps(state) {
  const {
    url, isLoading,
  } = state.FetchPokemonDetailsReducer;

  return {
    url, isLoading,
  };
}

const mapDispatchToProps = dispatch => ({
  reqMakerForPokemon: url => dispatch(reqMakerForPokemon(url)),
});

const Pokemon = props => {
  let renderedComponent;

  useEffect(() => {
    props.reqMakerForPokemon(props.location.pathname.slice(1));
  }, []);

  if (props.isLoading || !props.url) {
    renderedComponent = (<div>Loading</div>);
  } else {
    renderedComponent = (
      <div className="d-flex justify-content-center mt-5">
        <div className="card col-lg-3 col-10 rounded shadow-lg bg-white pb-4">
          <img src={props.url.sprites.front_default} alt="selected-pokemon" className="card-img-top" />
          <div className="font-weight-bold">
            Name:
            {props.url.forms[0].name}
          </div>
          <div className="font-weight-bold">
            Base experience:
            {props.url.base_experience}
          </div>
          <div className="font-weight-bold">
            Height:
            {props.url.height}
          </div>
          <div className="font-weight-bold">
            Weight:
            {props.url.weight}
          </div>
          <div className="font-weight-bold">
            Abilities:
            {props.url.abilities.map(element => element.ability.name)}
          </div>
        </div>
      </div>

    );
  }
  return (
    <div>
      <NavBar />
      {renderedComponent}
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
