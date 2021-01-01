const initialState = {
  value: null,
  imageUrl: null,
  isFetching: false,
  error: '',
};

export const renderPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RENDER_LIST': {
      const { value, imageUrl } = state;
      return {
        value, imageUrl,
      };
    }
    default:
      return state;
  }
};

export const FetchPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_BEGINNING':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        isFetching: false,
        value: action.payload.value,
        imageUrl: action.payload.imageUrl,
        error: '',
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        isFetching: false,
        value: null,
        imageUrl: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
