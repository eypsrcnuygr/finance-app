export const fetchProductBeginning = () => ({
  type: 'FETCH_PRODUCT_BEGINNING',
});

export const fetchProductsSuccess = (value, imageUrl) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: { value, imageUrl },
});

export const fetchProductsFailure = error => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: error,
});

export const fetchPokemon = url => ({
  type: 'FETCH_POKEMON',
  payload: url,
});

export const fetchPokemonLoading = () => ({
  type: 'FETCH_POKEMON_LOADING',
});
