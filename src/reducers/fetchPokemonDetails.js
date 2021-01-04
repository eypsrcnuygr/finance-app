const initialState = {
  url: null,
  isLoading: false,
};

const FetchPokemonDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON':
      return {
        url: action.payload,
        isLoading: false,
      };
    case 'FETCH_POKEMON_LOADING':
      return {
        isLoading: true,
      };
    default:
      return state;
  }
};

export default FetchPokemonDetailsReducer;
