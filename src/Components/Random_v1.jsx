import React, {useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '52hjE4X3eQ9rFd20NgCnzvOh2q4XZ9oW';

export default function Random() {
    // Making a custom hook
    const [gif, setGif] = useState('');

    // Making an async function that will get a random GIF from the server and set it
    const FetchGIF = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url); // --> this is a promise
        
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    };

    //? Component did mount(at the end of the first render)
    useEffect( () => {
        FetchGIF();
    }, [])

    // A function that is made for the new GIF button
    const handleClick = () => {
        FetchGIF();
    };

    return(
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="random gif"/>
            <button onClick={handleClick}>Click for new GIF</button>
        </div>
    )
};