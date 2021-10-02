import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import {fetchPokemonList} from '../actions/PokemonAction';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const PokemonList = (props) => {
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        dispatch(fetchPokemonList());
    }
    const dispatch = useDispatch();
    const list = useSelector(state => state.pokemonList);

    const showData = () => {
        if(list.loading) {
            return <h1>Loading...</h1>
        }
        if(!_.isEmpty(list.data)) {
            return (
                <div className="list-wrapper">
                    {
                        list.data.map((el, i) => {
                            return <div key={i} className={'pokemon-item'}>
                                <p>{el.name}</p>
                                {/* <p>Count: {el.count}</p> */}
                                <Link to={`/pokemon/${el.name}`}>View</Link>
                            </div> 
                        })
                    }
                </div>
            ) 
        }
        

        if(list.errorMsg !== "") {
            return <p>{list.errorMsg}</p>
        }
        return <p>Unabe to get data</p>
    };

    return (
        <div>
            <div className="search-wrapper">
                <p>Search:</p>
                <input type="text" onChange={e => setSearch(e.target.value)}/>
                <button onClick={e => props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>
            {showData()};
            {!_.isEmpty(list.data) && (
                <ReactPaginate 
                    pageCount={Math.ceil(list.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={(data) => fetchData(data.selected + 1)}
                    containerClassName={'pagination'}
                />
            )}
        </div>
    )
}

export default PokemonList;
