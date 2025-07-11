# URL Shortener

This is a full-stack URL shortener application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to enter long URLs and receive a shortened version. The backend stores the mapping in MongoDB, and users can be redirected to the original URL via the short code.

## Features

- Accepts valid long URLs
- Generates unique 6-character hash-based short URLs
- Stores mappings in a MongoDB database
- Redirects users from short URLs to original URLs
- Responsive and animated React frontend

## Technologies Used

### Frontend
- React.js
- Axios
- CSS (no frameworks)

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB Atlas
- Crypto (for hashing)

## Project Structure

```

url-shortener/
├── backend/
│   ├── index.js
│   ├── .env
│   ├── models/
│   │   └── Url.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── UrlShortener.jsx
│   │   ├── styles.css
│   │   └── index.js
│   └── package.json

````

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
````

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory and add your MongoDB URI:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/urlshortener
```

Start the backend server:

```bash
node index.js
```

The backend will be available at: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The frontend will be available at: `http://localhost:3000`

## Usage

1. Open `http://localhost:3000` in your browser.
2. Enter any valid long URL (must include `http://` or `https://`).
3. Click the **Shorten** button.
4. A short URL (e.g., `http://localhost:5000/u/abc123`) will be displayed.
5. Visiting that short URL will redirect to the original link.

## Deployment

* Frontend can be deployed using [Vercel](https://vercel.com).
* Backend can be deployed using [Render](https://render.com) or [Railway](https://railway.app).

Be sure to securely configure environment variables (`MONGO_URI`) on your hosting platform.

## License

This project is licensed under the MIT License.

