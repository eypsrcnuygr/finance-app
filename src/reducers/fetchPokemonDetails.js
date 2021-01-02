const initialState = {
  url: null,
};

const FetchPokemonDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON':
      return {
        url: action.payload,
      };
    default:
      return state;
  }
};

export default FetchPokemonDetailsReducer;
