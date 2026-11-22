Umair Farooq

A full-stack, independent platform designed to host professional conversations, share research, and facilitate collaborations with leaders in education, technology, and business.

🚀 Live Demo
Frontend: https://umairfarooquf04.netlify.app/

Admin Dashboard: https://umairfarooquf04.netlify.app/admin-login.html

✨ Features
Podcast Booking System: Guests can request to be featured on the podcast, dynamically selecting their preferred recording location (Host's place, Guest's place, or Professional Studio).

Partnership Portal: Companies and startups can submit collaboration requests with a dynamic form that adapts to Sponsorships, Consulting, or Startup Collaborations.

Ideas & Initiatives: A dedicated space for publishing articles, research drafts, and initiatives, along with a public form for visitors to submit their own ideas.

Secure Admin Dashboard: A password-protected (JWT) dashboard where the site owner can view, read, and delete incoming podcast bookings, partnership requests, and idea submissions.

Responsive Design: Fully responsive layout built with custom CSS, ensuring a clean, professional experience on mobile and desktop.

🛠️ Tech Stack
This project uses a decoupled architecture (separate frontend and backend).

Frontend:
HTML5, CSS3, Vanilla JavaScript

Hosted on Netlify

Backend:
Node.js, Express.js

JSON Web Tokens (JWT) for secure admin authentication

Hosted on Render

Database:
PostgreSQL
Hosted on Supabase

📁 Architecture Flow
The user interacts with the frontend (HTML/JS) hosted on Netlify.

The frontend sends fetch() API requests to the backend (Express) hosted on Render.

The backend validates the data and securely inserts it into the PostgreSQL database (Supabase).

For admin access, the backend verifies the password, issues a JWT token, and allows the admin dashboard to fetch and delete data securely.

⚙️ Environment Variables (Backend)
To run the backend locally or on a server, the following Environment Variables must be set:

env
DATABASE_URL=your_postgresql_connection_string
ADMIN_PASSWORD=your_secure_admin_password
JWT_SECRET=your_random_jwt_secret_key

📦 Local Development
To run the frontend locally, simply open index.html in your browser or use the Live Server extension in VS Code.

To run the backend locally:
Navigate to the backend folder.

Install dependencies:
bash
npm install
Create a .env file and add your environment variables.

Start the server:
bash
npm start
👨‍💻 Author
Umair Farooq

LinkedIn
YouTube
Instagram

