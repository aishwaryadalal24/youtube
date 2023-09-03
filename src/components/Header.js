import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../utils/sidebarSlice";

const Header = () => {

  const dispatch = useDispatch();

  return (
  <div className="flex justify-between grid-row">
    <div className="grid-col-2 flex justify-between">
        <img onClick={() => dispatch(toggleSidebar()) } className="h-6 m-4" alt='sidebar options' src='https://p7.hiclipart.com/preview/494/673/188/computer-icons-menu-bar-hamburger-button-menu.jpg'/>
        <Link to='/'> <div className="flex font-bold text-2xl m-2 items-center"> <img className="pr-2 h-10 w-14" alt='youtube logo' src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-icon-png-image_6315995.png'/> YouTube </div></Link>
    </div>
    <SearchBar className='grid-col-10'/>
    <img className="m-4 h-8 grid-col-1" alt='profile' src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'/>
  </div>
  );
}
  
export default Header;