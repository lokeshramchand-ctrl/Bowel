require('dotenv').config();

const express = require('express');
const connectDB = require('./connectDB');
const { testDB } = require('./testDB');

const app = express();

// ===== CONFIG =====
const PORT = process.env.PORT || 3000;

// ===== ROUTES =====
app.get('/', (req, res) => {
  res.send('Hello, this is working 🚀');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ===== START SERVER =====
async function startServer() {
  try {
    await connectDB();
    await testDB();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('❌ Startup failed:', err);
    process.exit(1);
  }
}

startServer();