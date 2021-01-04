const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

const create = () => {
  const store = {
    getState: jest.fn(() => ({
      FetchPokemonReducer: {
        count: 1118,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=300&limit=100',
        previous: 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100',
        results: [
          {
            name: 'unown',
            url: 'https://pokeapi.co/api/v2/pokemon/201/',
          },
          {
            name: 'wobbuffet',
            url: 'https://pokeapi.co/api/v2/pokemon/202/',
          },
          {
            name: 'girafarig',
            url: 'https://pokeapi.co/api/v2/pokemon/203/',
          },
          {
            name: 'pineco',
            url: 'https://pokeapi.co/api/v2/pokemon/204/',
          }],
      },
    })),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => thunk(store)(next)(action);

  return { store, next, invoke };
};

it('passes through non-function action', () => {
  const { next, invoke } = create();
  const action = { type: 'TEST' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

it('calls the function', () => {
  const { invoke } = create();
  const fn = jest.fn();
  invoke(fn);
  expect(fn).toHaveBeenCalled();
});

it('passes dispatch and getState', () => {
  const { store, invoke } = create();
  invoke((dispatch, getState) => {
    dispatch('TEST DISPATCH');
    getState();
  });
  expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
  expect(store.getState).toHaveBeenCalled();
});
