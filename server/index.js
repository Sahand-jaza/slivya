import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
let db;

async function initializeDatabase() {
    db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            message TEXT,
            date TEXT
        )
    `);
    console.log('Connected to SQLite database');
}

initializeDatabase().catch(err => {
    console.error('Failed to initialize database', err);
});

// Routes

// Save a new message
app.post('/api/messages', async (req, res) => {
    const { name, email, phone, message } = req.body;
    const date = new Date().toISOString();

    try {
        const result = await db.run(
            'INSERT INTO messages (name, email, phone, message, date) VALUES (?, ?, ?, ?, ?)',
            [name, email, phone, message, date]
        );
        res.status(201).json({ id: result.lastID, message: 'Message saved successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

// Get all messages (Admin)
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await db.all('SELECT * FROM messages ORDER BY date DESC');
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// Delete a message (Admin)
app.delete('/api/messages/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.run('DELETE FROM messages WHERE id = ?', id);
        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ error: 'Failed to delete message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
