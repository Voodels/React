import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./React-Router/Routes/About/About.jsx";
import Contact from "./React-Router/Routes/Contact/Contact.jsx";
import Home from "./React-Router/Routes/Home/Home.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
