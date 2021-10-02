import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPokemon } from '../actions/PokemonAction';
import _ from 'lodash';

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const pokemon = useSelector(state => state.pokemon);
    console.log(pokemon.data)
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        dispatch(fetchPokemon(pokemonName));
    };

    const showData = () => {
        if(!_.isEmpty(pokemon.data[pokemonName])) {
            const pokeData = pokemon.data[pokemonName];
            return <div className="pokemon-wrapper">
                <div className="item">
                    <h1>Sprites</h1>
                    <img src={pokeData.sprites.front_default} alt="" />
                    <img src={pokeData.sprites.back_default} alt="" />
                    <img src={pokeData.sprites.front_shiny} alt="" />
                    <img src={pokeData.sprites.back_shiny} alt="" />
                </div>
                <div className="item">
                    <h1>Stats</h1>
                    {pokeData.stats.map((el, i) => {
                        return <p key={i}>{el.stat.name} {el.base_stat}</p>
                    })}
                </div>
                <div className="item">
                    <h1>Abilities</h1>
                    {pokeData.abilities.map((el, i) => {
                        return <p key={i}>{el.ability.name}</p>
                    })}
                </div>
            </div>;
        };

        if(pokemon.loading) {
            return <h1>Loading...</h1>
        };

        if(pokemon.errorMsg !== "") {
            return <p>{pokemon.errorMsg}</p>;
        };

        return <p>Error getting Pokemon</p>;
    };

    return (
        <div>
            <p>{pokemonName}</p>
            {showData()}
        </div>
    )
}

export default Pokemon;

