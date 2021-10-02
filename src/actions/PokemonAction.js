const url = 'https://pokeapi.co/api/v2/'
export const fetchPokemonList = (page) => async(dispatch)  => {
    try {
        dispatch({
            type: 'POKEMON_LIST_FETCH_REQUEST'
        });

        const perPage = 10
        const offset = (page * perPage) - perPage
        const response = await fetch(`${url}pokemon?limit=${perPage}&offset=${offset}`);
        const data = await response.json();
        dispatch({
            type: 'POKEMON_LIST_FETCH_SUCCESS',
            payload: data
        });
    }catch(error) {
        dispatch({
            type: 'POKEMON_LIST_FETCH_FAILURE',
            payload: error,
        })
    };
};



export const fetchPokemon = (pokemon) => async(dispatch)  => {
    try {
        dispatch({
            type: 'POKEMON_FETCH_REQUEST'
        });

        const response = await fetch(`${url}pokemon/${pokemon}`);
        const data = await response.json();
        dispatch({
            type: 'POKEMON_FETCH_SUCCESS',
            payload: data,
            pokemonName: pokemon
        });
    }catch(error) {
        dispatch({
            type: 'POKEMON_FETCH_FAILURE',
            payload: error,
        })
    };
};

