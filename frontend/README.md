
Task Manager Web App
A simple and responsive task management web application that allows users to add, update, and delete tasks.
It supports real-time task tracking with completion status and visual statistics for pending and completed tasks.

How to Run the App
1) Backend Setup (Node.js + Express + MySQL)
Install dependencies >
Open your terminal, navigate to the backend directory (where index.js and db.js are), and run:

npm install express mysql2 cors

Create MySQL Database >

Open your MySQL client (like phpMyAdmin or CLI).

Run the following SQL:

CREATE DATABASE task_manager;

USE task_manager;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Start the backend server >

node index.js
(The backend will run on: http://localhost:5000)

2) Frontend Setup (React)
Navigate to your React app folder>

npm install

Start the frontend server>

npm start
(The frontend will run on: http://localhost:3000)

Make sure both frontend and backend servers are running simultaneously.

Technologies & Libraries Used

Frontend:

React (Create React App)
Axios (for HTTP requests)
CSS (Responsive design and custom scrollbar)

Backend

Node.js
Express
MySQL (via mysql2)
CORS middleware

Bonus Features
- Task statistics section showing the number of completed and pending tasks.
- Responsive UI: Optimized for mobile and tablet views.
- Timestamps (created_at) stored in DB for potential future use.
