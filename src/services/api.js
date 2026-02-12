import axios from 'axios';

// Use environment variable or fallback to /api for development proxy
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '/api';

// Mock data for fallback when backend is not available
const mockTickets = [
  {
    id: 'APPS-216',
    title: 'Solutz quam velit',
    status: 'To Do',
    priority: 'high',
    date: 'Jan 2',
    dueDate: '2026-01-02',
    assignedTo: 'user1',
    description: 'This is a sample ticket description for APPS-216',
    avatars: [
      { id: 1, color: 'bg-pink-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  },
  {
    id: 'OPIS-102',
    title: 'Laudantium neque veritatis',
    status: 'To Do',
    priority: 'medium',
    date: 'Jan 3',
    dueDate: '2026-01-03',
    assignedTo: 'user2',
    description: 'This is a sample ticket description for OPIS-102',
    avatars: [
      { id: 1, color: 'bg-orange-500' },
      { id: 2, color: 'bg-red-500' }
    ],
    selected: true
  },
  {
    id: 'APPS-217',
    title: 'Molestiae saepe illum',
    status: 'To Do',
    priority: 'low',
    date: 'Jan 1',
    dueDate: '2026-01-01',
    assignedTo: null,
    description: 'This is a sample ticket description',
    avatars: [
      { id: 1, color: 'bg-green-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  },
  {
    id: 'APPS-218',
    title: 'Dignissimos maiores porto',
    status: 'To Do',
    priority: 'high',
    date: 'May 31',
    dueDate: '2025-05-31',
    assignedTo: null,
    description: 'This is a sample ticket description',
    avatars: [
      { id: 1, color: 'bg-green-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  },
  {
    id: 'APPS-219',
    title: 'Nihil porro repudiandae',
    status: 'In Progress',
    priority: 'high',
    date: 'May 31',
    dueDate: '2025-12-31',
    assignedTo: 'user3',
    description: 'This is a sample ticket description',
    avatars: [
      { id: 1, color: 'bg-green-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  },
  {
    id: 'APPS-220',
    title: 'Aspernatur cumque ipsum',
    status: 'To Do',
    priority: 'medium',
    date: 'May 30',
    dueDate: '2026-05-30',
    assignedTo: null,
    description: 'This is a sample ticket description',
    avatars: [
      { id: 1, color: 'bg-green-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  },
  {
    id: 'APPS-221',
    title: 'Culpa quos sitquam',
    status: 'To Do',
    priority: 'low',
    date: 'May 30',
    dueDate: '2026-05-30',
    assignedTo: 'user1',
    description: 'This is a sample ticket description',
    avatars: [
      { id: 1, color: 'bg-purple-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  },
  {
    id: 'APPS-222',
    title: 'Atque incidunt autem',
    status: 'To Do',
    priority: 'medium',
    date: 'May 30',
    dueDate: '2026-05-30',
    assignedTo: null,
    description: 'This is a sample ticket description',
    avatars: [
      { id: 1, color: 'bg-green-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  },
  {
    id: 'APPS-223',
    title: 'Ut sapiente sunt',
    status: 'Done',
    priority: 'low',
    date: 'May 29',
    dueDate: '2026-05-29',
    assignedTo: 'user2',
    description: 'This is a sample ticket description',
    avatars: [
      { id: 1, color: 'bg-green-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  }
];

// Filter mock tickets based on filter type
const filterMockTickets = (filter) => {
  const today = new Date().toISOString().split('T')[0];
  
  switch (filter) {
    case 'pastdue':
      return mockTickets.filter(t => t.dueDate && t.dueDate < today && t.status !== 'Done');
    case 'highpriority':
      return mockTickets.filter(t => t.priority === 'high');
    case 'unassigned':
      return mockTickets.filter(t => !t.assignedTo || t.assignedTo === null);
    case 'mytickets':
      return mockTickets.filter(t => t.assignedTo);
    case 'all':
    default:
      return mockTickets;
  }
};

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // 5 second timeout
});

// Flag to track if we should use mock data
let useMockData = false;

// Ticket API functions
export const ticketAPI = {
  // Get all tickets with optional filter
  getAllTickets: async (filter = null) => {
    // If mock data flag is set, use mock data
    if (useMockData) {
      console.log('Using mock data (backend unavailable)');
      return new Promise((resolve) => {
        setTimeout(() => resolve(filterMockTickets(filter)), 300);
      });
    }

    try {
      const url = filter ? `/tickets?filter=${filter}` : '/tickets';
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.warn('Backend API unavailable, falling back to mock data:', error.message);
      useMockData = true; // Set flag to use mock data for subsequent calls
      return filterMockTickets(filter);
    }
  },

  // Get single ticket by ID
  getTicketById: async (id) => {
    if (useMockData) {
      const ticket = mockTickets.find(t => t.id === id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ticket) resolve(ticket);
          else reject(new Error('Ticket not found'));
        }, 300);
      });
    }

    try {
      const response = await api.get(`/tickets/${id}`);
      return response.data;
    } catch (error) {
      console.warn('Backend API unavailable, falling back to mock data');
      useMockData = true;
      const ticket = mockTickets.find(t => t.id === id);
      if (ticket) return ticket;
      throw new Error('Ticket not found');
    }
  },

  // Create new ticket
  createTicket: async (ticketData) => {
    if (useMockData) {
      const newTicket = {
        id: `APPS-${Math.floor(Math.random() * 10000)}`,
        ...ticketData,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        avatars: [
          { id: 1, color: 'bg-blue-500' },
          { id: 2, color: 'bg-green-500' }
        ]
      };
      mockTickets.push(newTicket);
      return new Promise((resolve) => {
        setTimeout(() => resolve(newTicket), 300);
      });
    }

    try {
      const response = await api.post('/tickets', ticketData);
      return response.data;
    } catch (error) {
      console.warn('Backend API unavailable, using mock data');
      useMockData = true;
      const newTicket = {
        id: `APPS-${Math.floor(Math.random() * 10000)}`,
        ...ticketData,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        avatars: [
          { id: 1, color: 'bg-blue-500' },
          { id: 2, color: 'bg-green-500' }
        ]
      };
      mockTickets.push(newTicket);
      return newTicket;
    }
  },

  // Update ticket
  updateTicket: async (id, ticketData) => {
    if (useMockData) {
      const ticketIndex = mockTickets.findIndex(t => t.id === id);
      if (ticketIndex !== -1) {
        mockTickets[ticketIndex] = { ...mockTickets[ticketIndex], ...ticketData };
        return new Promise((resolve) => {
          setTimeout(() => resolve(mockTickets[ticketIndex]), 300);
        });
      }
      throw new Error('Ticket not found');
    }

    try {
      const response = await api.put(`/tickets/${id}`, ticketData);
      return response.data;
    } catch (error) {
      console.warn('Backend API unavailable, using mock data');
      useMockData = true;
      const ticketIndex = mockTickets.findIndex(t => t.id === id);
      if (ticketIndex !== -1) {
        mockTickets[ticketIndex] = { ...mockTickets[ticketIndex], ...ticketData };
        return mockTickets[ticketIndex];
      }
      throw new Error('Ticket not found');
    }
  },

  // Delete ticket
  deleteTicket: async (id) => {
    if (useMockData) {
      const ticketIndex = mockTickets.findIndex(t => t.id === id);
      if (ticketIndex !== -1) {
        mockTickets.splice(ticketIndex, 1);
        return new Promise((resolve) => {
          setTimeout(() => resolve({ message: 'Ticket deleted successfully' }), 300);
        });
      }
      throw new Error('Ticket not found');
    }

    try {
      const response = await api.delete(`/tickets/${id}`);
      return response.data;
    } catch (error) {
      console.warn('Backend API unavailable, using mock data');
      useMockData = true;
      const ticketIndex = mockTickets.findIndex(t => t.id === id);
      if (ticketIndex !== -1) {
        mockTickets.splice(ticketIndex, 1);
        return { message: 'Ticket deleted successfully' };
      }
      throw new Error('Ticket not found');
    }
  },
};

export default api;
