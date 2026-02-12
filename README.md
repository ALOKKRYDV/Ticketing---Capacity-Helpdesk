# Helpdesk Ticketing Dashboard

A pixel-perfect ReactJS implementation of a modern Helpdesk Ticketing dashboard with a clean, professional UI.

## 🚀 Live Demo
**[View on Netlify](https://your-netlify-url.netlify.app)** - Deployed and ready to use!

## ✨ Features

- **Modern UI Design**: Pixel-perfect recreation of the Helpdesk interface
- **Fully Responsive**: Works seamlessly across all device sizes
- **Component-Based Architecture**: Clean, reusable React components
- **Tailwind CSS Styling**: Utility-first CSS framework for rapid development
- **Backend Integration**: REST API with filtering capabilities
- **Smart Fallback**: Works with mock data when backend is unavailable
- **Filter Views**: My Tickets, Past Due, High Priority, Unassigned, All Tickets
- **No External UI Libraries**: Built from scratch without MUI or Bootstrap

## 🛠 Tech Stack

- **ReactJS** (v18.2.0) - Modern React with functional components and hooks
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework
- **React Icons** (v5.0.1) - Popular icon library
- **Axios** (v1.13.5) - HTTP client for API calls
- **Express.js** - Backend REST API server
- **React Scripts** (v5.0.1) - Create React App build tools

## Project Structure

```
src/
├── components/
│   ├── SidebarIcons.jsx        # Left vertical navigation sidebar
│   ├── TicketViewsSidebar.jsx  # Ticket category filters
│   ├── TicketList.jsx          # Ticket list panel
│   ├── TicketCard.jsx          # Individual ticket card
│   ├── TicketDetails.jsx       # Main ticket detail view
│   ├── ReplyBox.jsx            # Reply/comment input
│   ├── ConversationItem.jsx    # Conversation thread item
│   ├── RightPanel.jsx          # Right details sidebar
│   └── Dashboard.jsx           # Main layout container
├── data/
│   └── mockData.js             # Mock ticket and conversation data
├── App.js                      # Root component
├── index.js                    # Application entry point
└── index.css                   # Global styles and Tailwind imports
```

## Components Overview

### SidebarIcons
- Dark blue vertical sidebar with navigation icons
- Logo at the top
- Active state highlighting
- Hover effects

### TicketViewsSidebar
- Light gray sidebar with ticket view categories
- Badge counters for each category
- Selected state styling
- Live Chats and Boards sections

### TicketList
- Searchable ticket list
- Ticket cards with status badges
- Priority indicators
- Avatar icons
- Date stamps

### TicketDetails
- Complete ticket information
- Reply box with formatting tools
- Conversation thread
- Attachment display
- Action buttons

### RightPanel
- Priority dropdown
- Assigned To field
- Project selection
- Ticket Type
- Due Date picker
- Tags management
- Expandable sections (Tasks, Collected Fields, Linked Tickets, History)

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Available Scripts

- `npm start` - Runs the app in development mode on [http://localhost:3000](http://localhost:3000)
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Design Features

### Color Palette
- **Primary Blue**: `#3b82f6`
- **Dark Sidebar**: `#1e293b` (slate-800)
- **Light Background**: `#f8fafc` (slate-50)
- **Selected State**: `#dbeafe` (blue-50)

### Typography
- Font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- Font sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl

### Spacing & Layout
- Consistent padding and margins using Tailwind's spacing scale
- Rounded corners: `rounded-lg`, `rounded-xl`
- Subtle shadows: `shadow-sm`
- Proper hover states on interactive elements

## Responsive Design

The dashboard adapts to different screen sizes:
- Desktop: Full 5-column layout
- Tablet: Collapsible sidebars
- Mobile: Stacked layout with navigation drawer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational and demonstration purposes.

## Author

Built with ❤️ using React and Tailwind CSS
