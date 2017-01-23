// BASE SETUP
// =============================================================================

// call the packages we need
let express = require('express');        // call express
let app = express();                 // define our app using express
let bodyParser = require('body-parser');
let fs = require('fs');
let uuid = require('node-uuid');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

app.use('/', function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

router.get('/features', function (req, res) {
  let content = fs.readFileSync('data.json');
  let jsonContent = JSON.parse(content);

  res.status(200).json(jsonContent);
});

router.put('/features', function (req, res) {
  console.log(JSON.stringify(req.body));

  var saveObject =

  fs.writeFile('data.json', JSON.stringify(req.body), function (err) {
    if (err) {
      return console.log(err);
    }
  });

  res.status(200).end();
});

router.get('/uuid', function (req, res) {
  res.status(200).json(uuid.v4());
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
