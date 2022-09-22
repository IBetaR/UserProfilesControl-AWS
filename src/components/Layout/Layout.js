import './Layout.css'

import NavigationBar from '../Navbar/NavigationBar';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    return (
        <>  
        <div className='App'>
            <NavigationBar />
            <div className='page'>
                <Outlet />
            </div>
        </div>
        </>
    );
};

export default Layout;