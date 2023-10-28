import { useEffect, useState } from "react";
import { YOU_TUBE_SUGGESSION_API } from "../utils/constants";
import { storeToCache } from "../utils/searchQueryCacheSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchSuggessionItem = ({result}) => {
    return (
        <li className="list-none p-2 border border-gray-200 hover:bg-gray-200">
            {result}
        </li>
    )
}

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggessions, setSuggessions] = useState([]);
    const [showSuggessions, setShowSuggessions] = useState(false);
    const searchQueryCache = useSelector((store) => store.searchQueryCache);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => getSearchSuggessions(), 200);
        return () => {
            clearTimeout(timer)
        };
    }, [searchQuery]);

    async function getSearchSuggessions() {
        console.log(searchQueryCache);
        if(searchQueryCache[searchQuery]) {
            console.log("inside if");
            setSuggessions(searchQueryCache[searchQuery]);
        } else {
            const data= await fetch(YOU_TUBE_SUGGESSION_API + searchQuery);
            const json = await data.json();
            console.log("api call", searchQuery);
            setSuggessions(json[1]);
            dispatch(storeToCache({ [searchQuery]: json[1] }));
        }
    }

    return (
    <div>
        <div className="flex">
            <div className="py-2 my-2">
                <input
                    className="rounded-l-full h-full bg-gray-200 p-2 w-96"
                    type='search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggessions(true)}
                    onBlur={() => setShowSuggessions(false)}
                />
            </div>
            <button className="py-2"><img className="h-10 my-2 rounded-r-full hover:shadow-lg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjtA8CqZMqf2l1KU0-A1iEc1-DSgnMNGKCQ&usqp=CAU'/></button>
        </div>
        {showSuggessions &&
            (<div className="fixed" onClick={() => setShowSuggessions(false)}>
                <ul className="bg-white w-96 rounded-lg shadow-md">
                    {suggessions.map(s => <SearchSuggessionItem  result={s}/>)}
                </ul>
            </div>)
        }
    </div>
    );
};

export default SearchBar;