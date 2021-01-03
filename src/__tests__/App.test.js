import {
  waitFor, render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import requestMaker from '../helpers/requestMaker';
import AppContainer from '../components/appContainer';
import store from '../store/index';

describe('App', () => {
  test('renders Show List Button', () => {
    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
    );
    const linkElement = screen.getByText(/Show List/i);
    expect(linkElement).toBeInTheDocument();
  });
});

jest.mock('../helpers/requestMaker.js');

describe('App', () => {
  test('We see that the buttons are changed', async () => {
    const middlewares = [thunkMiddleware];
    const mockStore = configureMockStore(middlewares);
    requestMaker.mockResolvedValueOnce();

    const store = mockStore({
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
    });
    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
    );
    await waitFor(() => expect(screen.getByText('Load More')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText('Show List')).toBe(null));
  });
});
