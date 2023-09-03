const SearchBar = () => {
    return (
    <div className="flex">
        <div className="py-2 my-2"><input className="rounded-l-full h-full bg-gray-200 p-2" type='search'/></div>
        <button className="py-2"><img className="h-10 my-2 rounded-r-full hover:shadow-lg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjtA8CqZMqf2l1KU0-A1iEc1-DSgnMNGKCQ&usqp=CAU'/></button>
    </div>
    );
};

export default SearchBar;