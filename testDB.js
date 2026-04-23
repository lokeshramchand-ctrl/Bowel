const mongoose = require('mongoose');

const testDB = async () => {
  try {
    const result = await mongoose.connection.db.admin().ping();
    console.log('🏓 MongoDB Ping Success:', result);
  } catch (err) {
    console.error('❌ Ping failed:', err.message);
  }
};

module.exports = { testDB };