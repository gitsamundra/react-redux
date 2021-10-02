const initState = {
    loading: false,
    data: {},
    errorMsg: ''
};

const PokemonReducer = (state = initState, action) => {
    switch(action.type) {
        case 'POKEMON_FETCH_REQUEST':
            return {
                ...state,
                loading: true,
                errorMsg: '',
            };
        case 'POKEMON_FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                },
                errorMsg: '',
            };
        case 'POKEMON_FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                errorMsg: action.payload,
                count: 0
            };
        default: 
        return state;
    }
}

export default PokemonReducer;
