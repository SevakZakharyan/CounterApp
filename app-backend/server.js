require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

app.use(cors());

app.get('/api/initial-value', (req, res) => {
	res.json({ initialValue: 10 });
});

