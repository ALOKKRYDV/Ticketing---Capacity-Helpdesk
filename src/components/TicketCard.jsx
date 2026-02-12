import React from 'react';

const TicketCard = ({ ticket }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-orange-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'To Do':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Done':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div
      className={`p-3 border-b border-gray-200 cursor-pointer transition-colors ${
        ticket.selected ? 'bg-blue-50' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
          <span className="text-xs text-gray-500 font-medium">{ticket.id}</span>
        </div>
        <span className="text-xs text-gray-500">{ticket.date}</span>
      </div>

      <h3 className="text-sm font-medium text-gray-900 mb-2">{ticket.title}</h3>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span
            className={`text-xs px-2 py-0.5 rounded border font-medium ${getStatusColor(
              ticket.status
            )}`}
          >
            {ticket.status}
          </span>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${getPriorityColor(ticket.priority)}`}></div>
            {ticket.avatars.map((avatar, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full ${avatar.color} border-2 border-white`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
