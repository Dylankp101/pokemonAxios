import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokelist from "../components/Pokelist"

const PokeButton = () => {

const [state, setState] = useState([]);

const onSubmitHandler = e => {
    e.preventDefault();
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0")
                .then(response =>{setState(response.data.results)})
}

    console.log(state);
        return(
            <div>
                <form onSubmit={ onSubmitHandler }>
                    <input type="submit"></input>
                </form>
                {state.map((pokemon, i)=> {
                    return <p key={i}>{pokemon.name}</p>
                })}
            </div>
        )
    }
export default PokeButton;




