const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/save', function (req, res) {
  console.log(req.body)
  fs.writeFile('data.json', JSON.stringify(req.body), 'utf8', err => {
    if (err) {
      res.status(500).send(`Error!: ${JSON.stringify(err)}`);
    } else {
      res.redirect('/admin.html');
    }
  })
})

app.get('/game', function (req, res) {
  fs.exists('data.json', exists => {
    if (exists) {
      fs.readFile('data.json', 'utf8', (err, data) => {
        console.log(err)
        console.log(data)
        if (err) {
          res.status(500).send(`Can't read file: ${JSON.stringify(err)}`);
        } else {
          res.setHeader('Cache-Control', 'no-store')
          res.send(data);
        }
      });
    } else {
      res.status(500).send('File not found, create data.json with correct data');
    }
  });
});

app.listen(process.env.PORT || 8080);