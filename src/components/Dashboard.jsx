import React from 'react';
import SidebarIcons from './SidebarIcons';
import TicketViewsSidebar from './TicketViewsSidebar';
import TicketList from './TicketList';
import TicketDetails from './TicketDetails';
import RightPanel from './RightPanel';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <SidebarIcons />
      <TicketViewsSidebar />
      <TicketList />
      <TicketDetails />
      <RightPanel />
    </div>
  );
};

export default Dashboard;
