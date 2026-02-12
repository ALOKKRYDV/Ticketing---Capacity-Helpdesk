const express = require('express');
const router = express.Router();

// In-memory database (you can replace this with actual database later)
let tickets = [
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

// GET all tickets with optional filters
router.get('/', (req, res) => {
  try {
    const { filter } = req.query;
    let filteredTickets = [...tickets];
    const today = new Date().toISOString().split('T')[0];

    switch (filter) {
      case 'pastdue':
        filteredTickets = tickets.filter(t => t.dueDate && t.dueDate < today && t.status !== 'Done');
        break;
      case 'highpriority':
        filteredTickets = tickets.filter(t => t.priority === 'high');
        break;
      case 'unassigned':
        filteredTickets = tickets.filter(t => !t.assignedTo || t.assignedTo === null);
        break;
      case 'mytickets':
        // Filter for assigned tickets (in a real app, you'd check against logged-in user)
        filteredTickets = tickets.filter(t => t.assignedTo);
        break;
      case 'all':
      default:
        // Return all tickets
        break;
    }

    res.json(filteredTickets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
});

// GET single ticket by ID
router.get('/:id', (req, res) => {
  try {
    const ticket = tickets.find(t => t.id === req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ticket' });
  }
});

// POST create new ticket
router.post('/', (req, res) => {
  try {
    const { title, status, priority, description } = req.body;
    
    if (!title || !status || !priority) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newTicket = {
      id: `APPS-${Math.floor(Math.random() * 10000)}`,
      title,
      status,
      priority,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      description: description || '',
      avatars: [
        { id: 1, color: 'bg-blue-500' },
        { id: 2, color: 'bg-green-500' }
      ]
    };

    tickets.push(newTicket);
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create ticket' });
  }
});

// PUT update ticket
router.put('/:id', (req, res) => {
  try {
    const ticketIndex = tickets.findIndex(t => t.id === req.params.id);
    
    if (ticketIndex === -1) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    tickets[ticketIndex] = {
      ...tickets[ticketIndex],
      ...req.body
    };

    res.json(tickets[ticketIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update ticket' });
  }
});

// DELETE ticket
router.delete('/:id', (req, res) => {
  try {
    const ticketIndex = tickets.findIndex(t => t.id === req.params.id);
    
    if (ticketIndex === -1) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    tickets.splice(ticketIndex, 1);
    res.json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
});

module.exports = router;
