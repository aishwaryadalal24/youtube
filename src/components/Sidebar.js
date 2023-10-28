import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const showSidebar = useSelector(store => store.sidebar.open);

    if(!showSidebar) {
        return null;
    }

    return (
        <div className="font-bold p-8 m-2 shadow-lg h-fit">
            <ul className="mt-2">
                <Link to="/"><li className="p-4"> Home </li></Link>
                <li className="p-4"> WatchList </li>
                <li className="p-4"> Downloads </li>
            </ul>
            <ul className="mt-2">
                <li className="p-4"> Music </li>
                <li className="p-4"> Sports </li>
                <li className="p-4"> News </li>
            </ul>
            <ul>
                <Link to="/about"> <li className="p-4">About Us</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar;