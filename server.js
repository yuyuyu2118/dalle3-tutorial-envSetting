const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is Running!');
});

app.post('/example', (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);
  res.json({ message: 'POST Request' });
});

app.listen(port, () => console.log('Listening on port', port));