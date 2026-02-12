import React, { useState, useEffect } from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import TicketCard from './TicketCard';
import { ticketAPI } from '../services/api';

const TicketList = ({ filter, refreshTrigger }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchTickets();
  }, [filter, refreshTrigger]);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const data = await ticketAPI.getAllTickets(filter);
      setTickets(data);
      setError(null);
    } catch (err) {
      setError('Failed to load tickets. Please make sure the backend server is running.');
      console.error('Error fetching tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-900">My Tickets</h2>
          <FiChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search tickets"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Loading tickets...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-full p-4">
            <p className="text-red-500 text-sm text-center">{error}</p>
          </div>
        ) : filteredTickets.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No tickets found</p>
          </div>
        ) : (
          filteredTickets.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))
        )}
      </div>
    </div>
  );
};

export default TicketList;
