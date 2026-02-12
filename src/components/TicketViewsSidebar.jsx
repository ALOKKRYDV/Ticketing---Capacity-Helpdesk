import React from 'react';
import { FiChevronDown, FiMessageCircle, FiGrid } from 'react-icons/fi';
import { ticketViewsData } from '../data/mockData';

const TicketViewsSidebar = () => {
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Ticket Views
          </h2>
          <FiChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="p-2">
          {ticketViewsData.map((view, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                view.active
                  ? 'bg-blue-100 text-blue-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-sm">{view.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  view.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {view.count}
              </span>
            </button>
          ))}
        </div>

        <div className="px-4 py-3 border-t border-gray-200 mt-4">
          <div className="flex items-center space-x-2 text-gray-600 mb-3">
            <FiMessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">LIVE CHATS</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FiGrid className="w-4 h-4" />
            <span className="text-sm font-medium">BOARDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketViewsSidebar;
