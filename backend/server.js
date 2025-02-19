const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

app.post('/search', (req, res) => {
  const { searchValue } = req.body;
  console.log(searchValue);
  res.json({ message: `Message recieved by server ` });
});

app.listen(5000, () => {
  console.log('Server running at Port 5000');
});
