const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

// connect to DATABASE
var options = {
  useNewUrlParser: true,
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://brackets2:St3adfast@ds163822.mlab.com:63822/brackets', options, );

// Import models
require('./models/User');

// start the app
const app = require('./app');

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
