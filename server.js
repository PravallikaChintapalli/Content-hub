import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from project root instead of /public
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/editor', (req, res) => {
    res.sendFile(path.join(__dirname, "editor.html"));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, "blog.html"));
});

// Use Render's PORT variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

