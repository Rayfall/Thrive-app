const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/taskappDB";
  }

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = Promise;

module.exports = mongoose;