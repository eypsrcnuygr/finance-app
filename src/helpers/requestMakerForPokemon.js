import { fetchPokemon, fetchPokemonLoading } from '../actions/index';

const reqMakerForPokemon = props => dispatch => {
  dispatch(fetchPokemonLoading());
  (async function fetcher() {
    const response = await fetch(
      `${props}`,
    );
    const data = await response.json();
    dispatch(fetchPokemon(data));
    return data;
  }());
};

export default reqMakerForPokemon;
