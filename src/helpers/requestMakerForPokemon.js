import { fetchPokemon } from '../actions/index';

function reqMakerForPokemon(props) {
  return dispatch => {
    (async function fetcher() {
      const response = await fetch(
        `${(props.location.pathname).slice(1)}`,
      );
      const data = await response.json();
      dispatch(fetchPokemon(data));
      return data;
    }());
  };
}

export default reqMakerForPokemon;
