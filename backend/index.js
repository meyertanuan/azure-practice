import express from 'express';

const app = express();
const PORT = process.env.PORT || 4400;

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'UP' });
});

// root
app.get('/', (req, res) => {
    res.send("Hello Express Nodejs World");
});

 // Start server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});