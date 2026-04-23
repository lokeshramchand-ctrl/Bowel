require('dotenv').config();

const express = require('express');
const connectDB = require('./connectDB');

const app = express();

const PORT = process.env.PORT || 3081;


app.get('/', (req, res) => {
  res.send('Lokesh, this is working');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});


async function startServer() {
  try {
    await connectDB();
    await testDB();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

startServer();