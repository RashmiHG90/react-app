import { useFetch } from './hooks';

export default function Joke() {

    const url = 'https://official-joke-api.appspot.com/jokes/random';
    const { setup, punchline } = useFetch(url, {});

    return (
        <div>
            <h3>Joke of the session</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}