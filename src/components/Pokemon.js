/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { useEffect } from 'react';
import reqMakerForPokemon from '../helpers/requestMakerForPokemon';

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
      <div>
        {props.url.base_experience}
        {' '}
        {props.url.forms[0].name}
        {' '}
        <img src={props.url.sprites.front_default} alt="selected-pokemon" />
      </div>
    );
  }
  return (
    <div>
      {renderedComponent}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
