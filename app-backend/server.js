require('dotenv').config();

const express = require('express');
const cors = require('cors');
const SERVER_PORT = process.env.BACKEND_PORT;

const app = express();

app.listen(SERVER_PORT, () => {
	console.log(`Server running on http://localhost:${SERVER_PORT}`);
});

app.use(cors({
	origin: `http://localhost:${process.env.UI_PORT}`
}));

app.get('/api/initial-value', (req, res) => {
	res.json({ initialValue: 10 });
});

