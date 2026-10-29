const express = require('express');
const path = require('path');
const app = express();

// Use the dynamic port provided by hosting platforms, or fallback to 3000 locally
const PORT = process.env.PORT || 3000;

// Serve all static files from your "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when someone visits the main URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running live at http://localhost:${PORT}`);
});