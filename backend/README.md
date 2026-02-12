# Helpdesk Ticketing System Backend

Backend API for the Helpdesk Ticketing Dashboard application built with Node.js and Express.

## Features

- RESTful API endpoints for ticket management
- CRUD operations (Create, Read, Update, Delete)
- In-memory data storage (can be extended to use a database)
- CORS enabled for cross-origin requests
- Error handling middleware

## API Endpoints

### Health Check
- **GET** `/api/health` - Check if server is running

### Tickets
- **GET** `/api/tickets` - Get all tickets
- **GET** `/api/tickets/:id` - Get a specific ticket by ID
- **POST** `/api/tickets` - Create a new ticket
- **PUT** `/api/tickets/:id` - Update a ticket
- **DELETE** `/api/tickets/:id` - Delete a ticket

## Request/Response Examples

### Create Ticket
```bash
POST /api/tickets
Content-Type: application/json

{
  "title": "Fix login bug",
  "status": "To Do",
  "priority": "high",
  "description": "Users can't login with their credentials"
}
```

### Update Ticket
```bash
PUT /api/tickets/APPS-216
Content-Type: application/json

{
  "status": "In Progress",
  "priority": "high"
}
```

## Setup Instructions

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## Environment Variables

Create a `.env` file in the backend directory:
```
PORT=5000
```

## Technologies Used

- Node.js
- Express.js
- CORS
- Nodemon (dev dependency)

## Future Enhancements

- Add database integration (MongoDB, PostgreSQL)
- Implement authentication and authorization
- Add data validation with express-validator
- Add rate limiting
- Add logging with Winston or Morgan
- Add unit and integration tests
