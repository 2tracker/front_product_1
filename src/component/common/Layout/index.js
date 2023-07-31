import React , {useState} from 'react';
import Sidebar from '../Sidebar';

function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div>
            <div className="flex h-full">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <div className=" w-full">
            <main>{children}</main>
          </div>
        </div>
        </div>
    );
}

export default Layout;