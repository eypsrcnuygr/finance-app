import { combineReducers } from 'redux';
import { renderPokemonReducer, FetchPokemonReducer } from './renderPokemonReducer';

const rootReducer = combineReducers({
  renderPokemonReducer, FetchPokemonReducer,
});

export default rootReducer;
