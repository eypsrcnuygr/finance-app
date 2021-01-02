import { combineReducers } from 'redux';
import FetchPokemonReducer from './renderPokemonReducer';
import FetchPokemonDetailsReducer from './fetchPokemonDetails';

const rootReducer = combineReducers({
  FetchPokemonReducer, FetchPokemonDetailsReducer,
});

export default rootReducer;
