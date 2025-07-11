import React from 'react';
import UrlShortener from './UrlShortener';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">URL Shortener</h1>
        <UrlShortener />
      </div>
    </div>
  );
}
