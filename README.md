
# 🛒 MERN Stack E-Commerce Website

A full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with secure user authentication, product management, cart system, order placement,user and admin dashboard.


## 🚀 Live Demo

https://mern-ecommerce-app-chi.vercel.app


## 📸 Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## 🧰 Tech Stack

**Frontend:** React.js, Tailwind CSS, Redux Toolkit, React Router

**Backend:** Node, Express

**Database:** MongoDB (Cloud via MongoDB Atlas)

**Authentication:** JWT (JSON Web Tokens)

**Deployment:** Vercel (Frontend), Render(Backend)




## 🔑 Features

👤 User Side
User Registration & Login

- View all products

- Filter by category

- Product search

- Product details page

- Add to cart

- Place orders

- View order history

🛠️ Admin Side
- Admin authentication

- Add, edit, and delete products

- Manage users and orders

## 📁 Folder Structure
```bash
├── backend/            # Express backend API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│   
├── frontend/           # React frontend
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── App.jsx
│
└── README.md
```

## ⚙️ Getting Started
Prerequisites
- Node.js
- MongoDB Atlas account

1. Clone the repository
```bash 
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce
```
2. Setup backend
```bash
cd backend
npm install
```
Create a .env file in backend/ with:
```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAMEI=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
Then run:
```bash
npm run Start
```
3. Setup frontend
```bash
cd ../frontend
npm install
npm run dev
```



## 📦 Deployment

- Frontend deployed on Vercel
- Backend deployed on Render 



