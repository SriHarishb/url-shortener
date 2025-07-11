const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Url = require('./models/Url');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

function generateShortCode(url) {
  return crypto.createHash('sha256').update(url).digest('base64url').slice(0, 6);
}

app.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) return res.status(400).json({ error: 'URL required' });

  const shortCode = generateShortCode(originalUrl);

  let url = await Url.findOne({ shortCode });
  if (!url) {
    url = new Url({ originalUrl, shortCode });
    await url.save();
  }

  const shortUrl = `http://localhost:5000/u/${shortCode}`;
  res.json({ shortUrl });
});

app.get('/u/:code', async (req, res) => {
  const { code } = req.params;
  const url = await Url.findOne({ shortCode: code });

  if (url) {
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json({ error: 'URL not found' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
