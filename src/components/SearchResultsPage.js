import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchResultsPage = () => {
    const { query } = useParams();
    const [resultsList, setResultsList] = useState([]);
    useEffect(() => {
        getSearchResults();
    }, [query]);

    async function getSearchResults() {
        console.log(query);
        const data = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=' +query+'&type=video&key=AIzaSyC37Jx_26xkDXhWKFCwLSQLIXx7a2Wj9Ac');
        const json = await data.json();
        console.log(json.items);
        setResultsList(json?.items);
    }

    return (<div>
        <h1 className="font-bold text-lg">Search Results</h1>
        <ul className="flex flex-col">
            {resultsList.map(result => <li key={result.id.videoId}> 
                <div className="shadow-lg p-4 m-2 hover:shadow-2xl w-84 flex">
                    <img src={result.snippet.thumbnails.medium.url}/>
                    <div className="p-5">
                        <h1 className="font-semibold">{result.snippet.title}</h1>
                        <h1>{result.snippet.channelTitle}</h1>
                        <p>{result.snippet.description}</p>
                    </div>
               </div>
        </li>)}
        </ul>
    </div>)
};

export default SearchResultsPage;
