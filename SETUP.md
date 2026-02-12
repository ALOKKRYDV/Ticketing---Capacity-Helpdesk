# Helpdesk Ticketing System - Full Stack

A full-stack helpdesk ticketing dashboard application with React frontend and Node.js/Express backend.

## Project Structure

```
ticket-react/
├── backend/                 # Backend API
│   ├── routes/
│   │   └── tickets.js      # Ticket routes
│   ├── server.js           # Express server
│   ├── package.json
│   └── .env
├── src/                    # Frontend React app
│   ├── components/         # React components
│   ├── services/           # API service layer
│   └── data/              # Mock data (for reference)
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Install Frontend Dependencies**
```bash
npm install
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
cd ..
```

### Running the Application

You need to run both the frontend and backend servers:

1. **Start the Backend Server** (Terminal 1)
```bash
cd backend
npm start
```
Backend will run on: `http://localhost:5000`

2. **Start the Frontend** (Terminal 2)
```bash
npm start
```
Frontend will run on: `http://localhost:3000`

## Features

### Frontend
- ✅ Responsive ticket dashboard
- ✅ Search tickets functionality
- ✅ Create new tickets with form
- ✅ Real-time ticket updates
- ✅ Loading and error states
- ✅ Modern UI with Tailwind CSS

### Backend API
- ✅ RESTful API endpoints
- ✅ CRUD operations for tickets
- ✅ CORS enabled
- ✅ Error handling
- ✅ Health check endpoint

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tickets` | Get all tickets |
| GET | `/api/tickets/:id` | Get ticket by ID |
| POST | `/api/tickets` | Create new ticket |
| PUT | `/api/tickets/:id` | Update ticket |
| DELETE | `/api/tickets/:id` | Delete ticket |
| GET | `/api/health` | Health check |

## Technologies Used

### Frontend
- React 18
- Tailwind CSS
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- CORS

## Next Steps / Enhancements

- [ ] Add database (MongoDB/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Ticket comments/replies
- [ ] File attachments
- [ ] Email notifications
- [ ] Ticket assignment to users
- [ ] Advanced filtering and sorting
- [ ] Dashboard analytics
- [ ] WebSocket for real-time updates

## Development

### Backend Development Mode
```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development
The React app automatically reloads on file changes.

## Troubleshooting

**Issue**: Frontend can't connect to backend

**Solution**: Make sure both servers are running and backend is on port 5000

**Issue**: CORS errors

**Solution**: Backend has CORS enabled. Check if backend URL in `src/services/api.js` matches your backend port

## License

MIT
