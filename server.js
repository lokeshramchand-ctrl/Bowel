require('dotenv').config();
const connectDB = require('./connectDB');
const { testDB } = require('./testDB');

(async () => {
  await connectDB();
  await testDB();
})();