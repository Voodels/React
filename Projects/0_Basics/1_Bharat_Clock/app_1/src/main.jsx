import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* // <React.StrictMode> is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants./ 
    // StrictMode currently helps with:
    // Identifying components with unsafe lifecycles
    // Warning about legacy string ref API usage
    // Warning about deprecated findDOMNode usage
    // Detecting unexpected side effects

    // StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

    more rendering -> slower rendering -> StrictMode is not for production ->

    performance optimization -> 
    */}
    <App />
  </React.StrictMode>
);
