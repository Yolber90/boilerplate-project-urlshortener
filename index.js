require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/shorturl', function(req, res){
  let l_url = req.protocol + '://' + req.get('host') + req.originalUrl;
  let s_url = req.protocol + '://' + req.get('host');
  res.json({
    "original_url": l_url,
    "short_url": s_url
  })
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
