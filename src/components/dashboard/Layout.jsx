import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
       {/* Navbar */}
      <Navbar onMenuToggle={toggleSidebar} />
      <div className="flex h-screen bg-back text-white">
        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 opacity-50 bg-back z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">         
          {/* Page Content */}
          <div className="p-6 bg-back flex-1 overflow-y-auto">
            <Outlet />
          </div>
          {/* footer */}
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Layout;