import React, { useState } from 'react';
import SidebarIcons from './SidebarIcons';
import TicketViewsSidebar from './TicketViewsSidebar';
import TicketList from './TicketList';
import TicketDetails from './TicketDetails';
import RightPanel from './RightPanel';
import AddTicketButton from './AddTicketButton';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('mytickets');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleTicketAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <SidebarIcons />
      <TicketViewsSidebar 
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Tickets Dashboard</h1>
            <AddTicketButton onTicketAdded={handleTicketAdded} />
          </div>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          <TicketList 
            filter={activeFilter}
            refreshTrigger={refreshTrigger}
          />
          <TicketDetails />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
