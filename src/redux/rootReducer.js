
import { combineReducers } from 'redux';
import PokemonListReducer from '../reducers/PokemonListReducer';
import PokemonReducer from '../reducers/PokemonReducer';

const rootReducer = combineReducers({
    pokemonList: PokemonListReducer,
    pokemon: PokemonReducer
});

export default rootReducer;
