const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send('hello app service');
});

app.post('/api/name', (req, res) => {
  if (req.body.name) {
    const name = req.body.name;
    res.send('hello ' + name);
  } else {
    res.send('no nane');
  }
});

app.listen(8080, () => {
  console.log('app is running');
});
