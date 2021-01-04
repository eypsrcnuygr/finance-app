import {
  waitFor, render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import AppContainer from '../components/appContainer';
import store from '../store/index';
import Pokemon from '../components/Pokemon';

describe('App', () => {
  test('renders Show List Button', () => {
    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
    );
    const linkElement = screen.getByText(/Show List/i);
    const secondButton = screen.queryByText('Load More');
    expect(linkElement).toBeInTheDocument();
    expect(secondButton).toBe(null);
  });
});

describe('App', () => {
  test('We see that the buttons are changed', async () => {
    const middlewares = [thunkMiddleware];
    const mockStore = configureMockStore(middlewares);

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

describe('Pokemon', () => {
  test('We see that the API call for pokemon is handled', async () => {
    const middlewares = [thunkMiddleware];
    const mockStore = configureMockStore(middlewares);

    const store2 = mockStore({
      FetchPokemonDetailsReducer: {
        url: {
          abilities: [
            {
              ability: {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/',
              },
              is_hidden: false,
              slot: 1,
            },
            {
              ability: {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
              },
              is_hidden: true,
              slot: 3,
            },
          ],
          base_experience: 64,
          forms: [
            {
              name: 'bulbasaur',
              url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
            },
          ],
          height: 7,
          held_items: [],
          id: 1,
          is_default: true,
          location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
          name: 'bulbasaur',
          order: 1,
          species: {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
          },
          sprites: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
            front_shiny_female: null,
            other: {
              dream_world: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
                front_female: null,
              },
              'official-artwork': {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
              },
            },
          },
          weight: 69,
        },
        isLoading: false,
      },
    });
    render(
      <Provider store={store2}>
        <BrowserRouter>
          <Switch>
            <Pokemon />
          </Switch>
        </BrowserRouter>

      </Provider>,
    );
    await waitFor(() => expect(screen.getByText('Name:bulbasaur')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Base experience:64')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Height:7')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Weight:69')).toBeInTheDocument());
  });
});
