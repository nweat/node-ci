jest.setTimeout(80000);

require('../models/User');
const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise; //tell mongoose to use Node JS global Promise object
mongoose.connect(keys.mongoURI, { useMongoClient: true });
