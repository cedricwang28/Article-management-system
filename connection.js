const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const URI ="mongodb+srv://cedric:wtw651125@rest-wiaqe.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;