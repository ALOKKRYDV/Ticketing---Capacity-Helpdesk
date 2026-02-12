import React from 'react';
import SidebarIcons from './SidebarIcons';
import TicketViewsSidebar from './TicketViewsSidebar';
import TicketList from './TicketList';
import TicketDetails from './TicketDetails';
import RightPanel from './RightPanel';
import AddTicketButton from './AddTicketButton';

const Dashboard = () => {
  const handleTicketAdded = () => {
    // Refresh the ticket list - you can add state management here if needed
    window.location.reload();
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <SidebarIcons />
      <TicketViewsSidebar />
      
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Tickets Dashboard</h1>
            <AddTicketButton onTicketAdded={handleTicketAdded} />
          </div>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          <TicketList />
          <TicketDetails />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
