export const renderList = (value, imageUrl) => ({
  type: 'RENDER_LIST',
  payload: {
    value, imageUrl,
  },
});

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
