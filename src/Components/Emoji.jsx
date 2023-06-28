import axios from 'axios'
import { useState , useEffect } from 'react'

const Emoji = () => {
    
    const [emoji, setEmoji] = useState({})

     
        
        useEffect(() => {
            axios
            .get("https://api.emojisworld.fr/v1/random?limit=1")
            .then ( resp => {
                console.log(resp.data)
                setEmoji(resp.data.results[0])
        })
        .catch (error => console.error(error))

        }, [])
    return (
        <>
         <h1>{emoji.name}</h1>
         <p>{emoji.emoji}</p>
        </>
    )
}

export default Emoji