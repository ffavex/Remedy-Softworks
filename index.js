const path = require('path');
const express = require('express');
const session = require('express-session');

const app = express();

// Middleware for session management
app.use(session({
    secret: 'AHdabfbt2qt165533hj3i1a_%$!', // Change this to a strong secret
    resave: false,
    saveUninitialized: true,
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    return response.sendFile('index.html', { root: '.' });
});

// Example of an OAuth2 callback route
app.get('/auth/discord', (request, response) => {
    // Here you should handle the OAuth2 token exchange and set session variable
    // For example:
    // req.session.accessToken = token; // Store the access token
    return response.sendFile('dashboard.html', { root: '.' });
});

// Protect the dashboard route
app.get('/dashboard', (request, response) => {
    if (!request.session.accessToken) {
        return response.redirect('/'); // Redirect to index if not logged in
    }
    return response.sendFile('dashboard.html', { root: '.' });
});

const port = 53134;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
