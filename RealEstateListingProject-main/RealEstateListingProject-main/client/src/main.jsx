import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ythypufsxiy5x0p1.us.auth0.com"
      clientId="PmyNztS9kgwG3bKn2KyScov23C7PJted"
      authorizationParams={{
        redirect_uri: "https://real-estate-listing-project-ten.vercel.app/",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
