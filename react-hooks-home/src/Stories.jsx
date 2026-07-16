import { useFetch } from './hooks';

export default function Stories() {

    const url = 'https://news-proxy-230704.appspot.com/topstories';
    const stories = useFetch(url, []);

    return (
        <div className='Stories'>
            <h3>Stories</h3>
            {
                stories.map(story => {
                    const { id, by, time, title, url } = story;

                    return (
                        <div key={id}>
                            <a href={url}>{title}</a>
                            <div>{by} - {new Date(time * 1000).toLocaleString()} </div>
                        </div>
                    )

                })
            }

        </div>
    )
}