const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const { promisify } = require('util')
const fs = require('fs');
const { addMinutes } = require('date-fns');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (_, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/save', async (req, res) => {
  try {
    const data = {
      ...await readData(),
      ...req.body,
    };
    await writeData(data);
    res.redirect('/admin.html');
  } catch (e) {
    res.status(500).send(`Error!: ${JSON.stringify(e)}`);
  }
})

const readData = async () => {
  const contents = await readFile('data.json', 'utf8');
  return JSON.parse(contents);
}

const writeData = async (data) => {
  await writeFile('data.json', JSON.stringify(data), 'utf8')
}

app.post('/start', async function(req, res) {
  const matchDuration = 50;
  try {
    const data = {
      ...await readData(),
      endTime: addMinutes(new Date(), matchDuration)
    }

    await writeData(data);
  } catch (e) {
    res.status(500).send(`Error!: ${JSON.stringify(e)}`);
  }
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