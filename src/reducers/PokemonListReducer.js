const initState = {
    loading: false,
    data: [],
    errorMsg: '',
    count: 0
};

const PokemonListReducer = (state = initState, action) => {
    switch(action.type) {
        case 'POKEMON_LIST_FETCH_REQUEST':
            return {
                ...state,
                loading: true,
                errorMsg: '',
                count: 0
            };
        case 'POKEMON_LIST_FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: '',
                count: action.payload.count
            };
        case 'POKEMON_LIST_FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                errorMsg: action.payload,
                count: 0
            };
        default: 
        return state;
    }
};

export default PokemonListReducer;