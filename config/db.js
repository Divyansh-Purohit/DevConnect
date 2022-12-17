const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://Divyansh:Siddharth%401993@cluster0.qgdsikw.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
// // "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
