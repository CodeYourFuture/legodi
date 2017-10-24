var express = require('express');
var cors = require('cors')
var router = express.Router();

/* GET users listing. */
var corsOptions = {
  origin: 'http://localhost:3000.com',
  optionsSuccessStatus: 200 
}
app.use(express.static(".public"));

app. use (cors());

app.get('/manifest/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})
