const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

var promise = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/legodi', {
  useMongoClient: true
});
