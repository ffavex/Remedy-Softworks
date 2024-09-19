const path = require('path');
const express = require('express');


const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
	return response.sendFile('dashboard.html', { root: '.' });
});

app.get('/dashboard', (request, response) => {
    if (!request.session.accessToken) {
        return response.redirect('/'); // Redirect to index if not logged in
    }
    return response.sendFile('dashboard.html', { root: '.' });
});
const port = '53134';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
