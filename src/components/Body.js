import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {

    return (
        <div className='flex top-24 mb-24 relative'>
            <Sidebar/>
            <Outlet />
        </div>
    )
};

export default Body;