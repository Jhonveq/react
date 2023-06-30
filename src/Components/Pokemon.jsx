import axios from 'axios'
import { useState , useEffect } from 'react'

const Pokemon = () => {
    
    const [pokemon, setPokemon] = useState({})

    const initialRandom = Math.floor(Math.random()* (826 - 1) + 1)

    const [id, setId] =  useState( initialRandom)

    // const [height, setHeight] = useState()

        
        useEffect(() => {
            axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then ( resp => {
                console.log(resp.data)
                setPokemon(resp.data)
        })
        .catch (error => console.error(error))

        }, [id])

    const changePokemon = () => {
        const random = Math.floor(Math.random()* (826 - 1) + 1)
        setId(random)
    }

    
    // const changeHeight = () => {
    //     setHeight(height * 10)
    // }

    const height = `${pokemon.height}`

    const [isDecimeters, setIsDecimeters] = useState(true)

    const changeUnits = () => {
        setIsDecimeters(!isDecimeters)
    }


    return (
        <>
         <button onClick={changePokemon}>Change Pokemon</button>
         <h1>Name: {pokemon.name}</h1>
         <p>Weight: {pokemon.weight} Kg</p>
         <p>Height: {isDecimeters ? height : height * 10 } {isDecimeters ? "dc" : "cm"}</p> 
         <button onClick={changeUnits}>Convert Unit</button>
         <img src={pokemon.sprites?.front_default} alt="" />
        </>
    )
}

export default Pokemon