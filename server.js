import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname replacement in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const initial_path = path.join(__dirname, "public");

app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
});

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
});

app.get("/blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
});

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
