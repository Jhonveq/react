import axios from 'axios'
import { useState , useEffect } from 'react'

const Joke = () => {
    
    const [joke, setJoke] = useState({})

     
        
        useEffect(() => {
            axios
            .get("https://api.chucknorris.io/jokes/random")
            .then ( resp => {
                console.log(resp.data)
            setJoke(resp.data)
        })
        .catch (error => console.error(error))

        }, [])
    return (
        <>
         <h1>{joke.value}</h1>
        </>
    )
}

export default Joke