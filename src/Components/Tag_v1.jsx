import React, {useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = '52hjE4X3eQ9rFd20NgCnzvOh2q4XZ9oW';

export default function Tag() {

    // Making custom hooks
    const [gif, setGif] = useState('');
    const [tag, setTag] = useState('gym');

    // Making an async function that will get a random GIF from the server and set it
    const FetchGIF = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url); // --> this is a promise
        
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    };

    //? Component did mount(at the end of the first render)
    useEffect( () => {
        FetchGIF(tag);
    }, [tag])

    // A function that is made for the new GIF button
    const handleClick = () => {
        FetchGIF(tag);
    };

    return(
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="random gif"/>
            <button onClick={handleClick}>Click for new {tag} GIF</button>
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
        </div>
    )
}
