import axios from 'axios'
import { useState , useEffect } from 'react'

const Pokemon = () => {
    
    const [pokemon, setPokemon] = useState({})

     
        
        useEffect(() => {
            axios
            .get("https://pokeapi.co/api/v2/pokemon/charizard")
            .then ( resp => {
                console.log(resp.data)
                setPokemon(resp.data)
        })
        .catch (error => console.error(error))

        }, [])
    return (
        <>
         <h1>Name: {pokemon.name}</h1>
         <p>Weight: {pokemon.weight} Kg</p>
         <img src={pokemon.sprites?.front_default} alt="" />
        </>
    )
}

export default Pokemon