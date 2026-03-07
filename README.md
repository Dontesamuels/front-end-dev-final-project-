DevTrack is a React-based web application designed to help developers organize, track, and manage their coding projects in one centralized dashboard. The application demonstrates modern frontend development practices including component-based architecture, client-side routing, state management using React Context, API integration, authentication, responsive design, and automated testing. This project was developed as a capstone-style frontend application that reflects real-world development workflows and production-ready standards.

GitHub Repository

https://github.com/Dontesamuels/front-end-dev-final-project-

vercal app 
https://front-end-dev-final-project.vercel.app/ 


Features
Project Dashboard

Users can create, organize, and track their development projects in a structured dashboard interface.

Authentication System

The application includes a JWT-style authentication workflow with:

User registration

User login

Secure logout

Protected routes

Authentication state management with React Context API

Protected Routes

Certain pages require authentication before they can be accessed, ensuring a secure user experience.

API Integration

The application integrates with the GitHub API to display developer resources and repositories.

Responsive Design

The interface follows a mobile-first responsive design that adapts across desktop, tablet, and mobile devices.

Testing

Unit tests were implemented using:

Vitest

React Testing Library

Tests verify:

Page rendering

Authentication components

Routing behavior

Secure Deployment

The application is deployed on Vercel with production configuration and environment-based deployment.

Technology Stack
Frontend

React.js

JavaScript (ES6+)

Vite

Routing

React Router DOM

State Management

React Context API

React Hooks

Styling

CSS3

Responsive Layout

API Integration

GitHub REST API

Testing

Vitest

React Testing Library

jsdom

Deployment

Vercel

Version Control

Git

GitHub

Project Architecture

The project follows a modular React architecture:

src
 ├── components
 │   ├── Header.jsx
 │   ├── Layout.jsx
 │   ├── ProtectedRoute.jsx
 │   ├── ProjectCard.jsx
 │   └── ProjectForm.jsx
 │
 ├── contexts
 │   ├── AuthContext.jsx
 │   └── ProjectContext.jsx
 │
 ├── pages
 │   ├── Home.jsx
 │   ├── Dashboard.jsx
 │   ├── Login.jsx
 │   ├── Register.jsx
 │   ├── Resources.jsx
 │   └── NotFound.jsx
 │
 ├── services
 │   └── github.js
 │
 ├── tests
 │   ├── home.test.jsx
 │   ├── login.test.jsx
 │   └── setup.js
 │
 └── styles
     └── global.css
Installation

To run this project locally:

Clone the repository
git clone https://github.com/Dontesamuels/front-end-dev-final-project-.git
Navigate to the project
cd devtrack
Install dependencies
npm install
Run the development server
npm run dev

The application will run locally at:

http://localhost:5173
Running Tests

To run the test suite:

npm run test

To run tests once (without watch mode):

npx vitest run
Deployment

This project is deployed using Vercel.

Deployment occurs automatically when changes are pushed to the GitHub repository.

Build command:

npm run build
Future Enhancements

Potential improvements for future development include:

Backend API for persistent project storage

Full JWT authentication with server validation

Database integration (MongoDB / PostgreSQL)

User profile management

Project analytics dashboard

Dark/light theme switching

Author

Donte Samuels

License

This project is intended for educational and portfolio demonstration purposes.
