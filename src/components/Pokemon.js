/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import reqMakerForPokemon from '../helpers/requestMakerForPokemon';

function mapStateToProps(state) {
  const {
    url,
  } = state.FetchPokemonDetailsReducer;

  return {
    url,
  };
}

const mapDispatchToProps = dispatch => ({
  reqMakerForPokemon: url => dispatch(reqMakerForPokemon(url)),
});

const Pokemon = props => {
  reqMakerForPokemon(props);
  return (
    <div>
      <button type="button" onClick={() => props.reqMakerForPokemon(props)}>Click</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
