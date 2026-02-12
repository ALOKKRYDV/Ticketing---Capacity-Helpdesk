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
    description: 'This is a sample ticket description',
    avatars: [
      { id: 1, color: 'bg-green-500' },
      { id: 2, color: 'bg-red-500' }
    ]
  }
];

// GET all tickets
router.get('/', (req, res) => {
  try {
    res.json(tickets);
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
