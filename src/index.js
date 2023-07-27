import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import { UserProvider } from "./context";
import {BrowserRouter} from "react-router-dom";


const root = createRoot(document.getElementById("root"));   
root.render(                                                  // renders app compenent (app component app.js)
  <UserProvider>
  <BrowserRouter>
<App />
  </BrowserRouter>
  </UserProvider>
);
