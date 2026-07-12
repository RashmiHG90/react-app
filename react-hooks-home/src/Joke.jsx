import { useEffect, useState } from 'react';

export default function Joke() {

    const [joke, setJoke] = useState({});

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(json => {
                console.log('Joke json', json)
                setJoke(json)
            });
    }, []);

    const { setup, punchline } = joke;

    return (
        <div>
            <h3>Joke of the session</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}