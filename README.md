# 🔐 MERN Authentication System

A full-stack authentication system built using MongoDB, Express, React, and Node.js. This project implements secure user authentication with JWT, protected routes, and full CRUD operations.

---

## 🚀 Features

- User Registration
- User Login with JWT Authentication
- Access Token & Refresh Token
- Protected Routes
- Update User Email
- Delete User Account
- Logout Functionality
- Password Hashing using bcrypt
- Input Validation using Joi

---

## 🛠️ Tech Stack

- Frontend: React (Vite), Axios, React Router
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Security: JWT, bcrypt, Helmet, CORS

---

## ⚙️ Setup Instructions

### Backend

1. Install dependencies  

--npm install 


2. Create `.env` file  

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret  


3. Run server  

--npm start


---

### Frontend

1. Install dependencies  

npm install

2.Start frontend 

npm run dev 


---

## 🔐 API Endpoints

- POST `/api/auth/register` → Register user  
- POST `/api/auth/login` → Login user  
- GET `/api/auth/users` → Get all users (Protected)  
- PUT `/api/auth/users/:id` → Update user (Protected)  
- DELETE `/api/auth/users/:id` → Delete user (Protected)  
- POST `/api/auth/refresh-token` → Refresh access token  
- POST `/api/auth/logout` → Logout user  

---

## 🔑 Authentication Flow

- User logs in and receives access + refresh tokens  
- Access token is used for protected routes  
- Refresh token generates new access tokens  
- Logout removes refresh token from database  

---

## 📌 Notes

- Only logged-in users can update or delete their own account  
- All protected routes require Authorization header  
- Format: `Authorization: Bearer <token>`  

---

## 👩‍💻 Author

Sireesha Nidamanuri  
MERN Stack Developer