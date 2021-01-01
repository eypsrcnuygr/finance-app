import { combineReducers } from 'redux';
import FetchPokemonReducer from './renderPokemonReducer';

const rootReducer = combineReducers({
  FetchPokemonReducer,
});

export default rootReducer;
