# 🔐 Firebase Login System Template

## 📝 Description

This project provides a template for a user registration and login system using Google Firebase. It offers a secure and scalable solution for implementing user authentication in web applications.

## 🚀 Features

- 📝 User Registration
- 🔑 User Login
- 🔒 Secure Authentication with Firebase
- 💾 User Data Storage in Firestore
- 🎨 Responsive UI

## 🛠️ Technology Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Firebase Authentication
- Firebase Firestore
- Firebase SDK version 10.13.2

## 🏗️ Project Structure

- `index.html`: Login page
- `register.html`: User registration page
- `homepage.html`: Landing page after successful login
- `login.js`: Handles user login functionality
- `register.js`: Manages user registration process
- `firebaseAuth.js`: Initializes Firebase and exports auth and db objects
- `uiManager.js`: Contains utility functions for UI management

## 🚀 Getting Started

1. Clone this repository
2. Set up a Firebase project and obtain your configuration details
3. Update the `firebaseConfig` object in `src/firebaseAuth.js` with your Firebase project details
4. Deploy the project to a web server or run it locally

## 📚 Usage

- Navigate to `index.html` to access the login page
- Click on "Register" to create a new account
- After successful login or registration, users will be redirected to `homepage.html`

## 🔒 Security

- Passwords are securely handled by Firebase Authentication
- User data is stored in Firestore with appropriate security rules (to be configured in Firebase console)
