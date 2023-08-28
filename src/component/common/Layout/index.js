import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div>
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

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