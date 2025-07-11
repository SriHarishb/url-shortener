import React, { useState } from 'react';
import axios from 'axios';

export default function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    if (!originalUrl.trim()) return;
    try {
      const response = await axios.post('https://url-shortener-api.onrender.com/api/shorten', {
        originalUrl
      });

      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div className="shortener-box">
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter URL to shorten"
        className="url-input"
      />
      <button onClick={handleShorten} className="shorten-button">Shorten</button>
      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}
