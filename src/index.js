import React from "react"; // Importing React library
import ReactDOM from "react-dom/client"; // Importing React DOM for rendering components to the DOM
import App from "./App"; // Importing the main App component

// Getting the root DOM element where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component inside the root element using React's StrictMode
root.render(
  <React.StrictMode>
    <App /> {/* The main application component */}
  </React.StrictMode>
);
