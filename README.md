# 🐱 Cat Library

A simple web application to showcase a library of cats, displaying their pictures and descriptions. This project is built with [Vite.js](https://vitejs.dev/) using the React template, and it uses [Redux Toolkit](https://redux-toolkit.js.org/) and [Redux-Saga](https://redux-saga.js.org/) for state management.

## 🚀 Features

- Fetch and display a list of cats with images and descriptions
- State management with Redux Toolkit and Redux-Saga
- Responsive design for mobile and desktop views
- Fast and optimized development experience with Vite.js

## 🛠️ Tech Stack

- **React** - Frontend library for building user interfaces
- **Vite.js** - Fast and minimalistic development server and build tool
- **Redux Toolkit** - Simplified state management for Redux
- **Redux-Saga** - Handling side effects in Redux, such as async data fetching

## 📦 Installation

To set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rizkyverandi/cats-library.git
   cd cats-library
   yarn install
   yarn dev
   Open your browser and navigate to http://localhost:5173 to view the app.
   ```
## 📄 Project Structure

cat-library/
├── public/               # Static files
├── src/
│   ├── components/       # Reusable React components (e.g., Card, Loading)
│   ├── features/         # Redux features and sagas
│   ├── store/            # Redux store configuration (e.g., customHooks, rootSaga, rootReducer, store)
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── .eslintrc.js          # Linting configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation

## 🔄 State Management

This app leverages Redux Toolkit to define slices and reducers for managing cat data and Redux-Saga to handle asynchronous operations, such as API calls for fetching cat images and descriptions.

**Key Concepts**
- Redux Toolkit - Manages cat data and loading state.
- Redux Saga - Handles API calls and updates the state once data is fetched.

## ⚙️ Scripts
yarn dev - Start the development server
yarn build - Build the project for production
yarn preview - Preview the production build locally

This template provides an overview of the project's purpose, features, setup instructions, and the technical stack used. You can modify sections as needed to match any specific details or changes in your project.
   
