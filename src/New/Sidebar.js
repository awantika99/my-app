import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
   CDBSidebarFooter,
} from 'cdbreact';


const Sidebar = () => {
  return (
      <CDBSidebar>
        <CDBSidebarHeader  prefix={<i className="fa fa-bars" />}>WelCome
       </CDBSidebarHeader>
        <CDBSidebarContent>
         
          <CDBSidebarMenu>
            <CDBSidebarMenuItem> <a href="/register" className="text-decoration-none" style={{ color: 'inherit' }}>
           Register
          </a></CDBSidebarMenuItem>
         <CDBSidebarMenuItem> <a href="/login" className="text-decoration-none" style={{ color: 'inherit' }}>
           Login
          </a></CDBSidebarMenuItem> 
          <CDBSidebarMenuItem> <a href="/re" className="text-decoration-none" style={{ color: 'inherit' }}>
           ViewData
          </a></CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '200px 15px'}}>
       </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

export default Sidebar;