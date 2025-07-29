# 💻 E-commerce Angular Project

A responsive E-commerce web application built using Angular as part of the final project for the ITI Angular Internship - July 2025.

## 🔧 Tech Stack
- Angular 17
- TypeScript
- Bootstrap 5
- JSON Server API


## 🚀 Features

- 🛒 Browse products with filters and search
- 🔍 View product details
- ➕ Add/remove items from the cart
- 👤 User login and registration
- 🧾 Checkout with order summary
- 🧑‍💼 Admin can manage products (add/edit/delete)
- 🧠 Smart UI with Angular services and routing
- 📱 Fully responsive design

## 📁 Project Structure
```
src/
├── app/    
│   ├── pages/                  
│   │   ├── home/
│   │   ├── product/
│   │   │   ├── product-page/
│   │   │   └── product-details/
│   │   ├── cart/
│   │   ├── checkout/
│   │   └── auth/
│   │       ├── login/
│   │       └── register/
│   ├── shared/                 
│   │   ├── header/
│   │   └── footer/             
│   ├── core/                 
│   │   ├── service/
│   │   └── models/
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
│
├── assets/
├── environments/
└── index.html
```

## 📦 How to Run

```bash
npm install
ng serve
