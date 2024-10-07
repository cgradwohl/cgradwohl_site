const express = require('express'),
  path = require('path'),
	bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
	cors = require('cors');

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envConfig = require('./config/environment')[env];

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});
