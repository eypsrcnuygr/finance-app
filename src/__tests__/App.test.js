import {
  waitFor, render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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
  test('We show a list of posts', async () => {
    // const posts = [{ name: 'electrode', url: 'https://pokeapi.co/api/v2/pokemon/101/' }];
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    requestMaker.mockResolvedValueOnce();

    const store = mockStore({});
    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Show List'));
    expect(requestMaker).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByText('electrode')).toBeInTheDocument());
  });
});
