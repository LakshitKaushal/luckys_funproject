# Cute Sorry Website

A adorable MERN stack website that displays a cute apology message with a hidden note that reveals when you click the button.

## Features

- **Cute Apology Message**: Displays a heartfelt apology message
- **Hidden Note**: Click the button to reveal a special hidden message
- **Beautiful UI**: Gradient backgrounds, animations, and cute styling
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Floating hearts, sparkles, and smooth transitions

## Tech Stack

- **MongoDB** (if you want to add database functionality later)
- **Express.js** - Backend server
- **React** - Frontend
- **Node.js** - Runtime environment

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone or download this project
2. Install dependencies for both backend and frontend:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
npm run install-client
```

### Running the Application

#### Development Mode (Recommended)

Run both backend and frontend concurrently:

```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend on http://localhost:3000

#### Production Mode

1. Build the React app:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

The application will be available at http://localhost:5000

## Project Structure

```
cute-sorry-website/
|-- client/                 # React frontend
|   |-- public/
|   |-- src/
|   |   |-- App.js         # Main React component
|   |   |-- App.css        # Styling
|   |   |-- index.js       # React entry point
|   |   |-- index.css      # Global styles
|   |-- package.json
|-- server.js              # Express server
|-- package.json           # Backend dependencies
|-- README.md
|-- .gitignore
```

## API Endpoint

- `GET /api/message` - Returns the main apology message and hidden note

## Customization

### Changing Messages

Edit the messages in `server.js`:

```javascript
app.get('/api/message', (req, res) => {
  res.json({
    mainMessage: "Your custom apology message here",
    hiddenNote: "Your custom hidden note here"
  });
});
```

### Styling

All styling is in `client/src/App.css`. Feel free to modify:
- Colors and gradients
- Animations
- Layout
- Fonts

## Adding Database Support

To add MongoDB support:

1. Install mongoose: `npm install mongoose`
2. Create a Message model
3. Update the API route to fetch from database
4. Add environment variables for database connection

## License

MIT License - feel free to use this for your own cute apology needs! ilyyy
