import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar.tsx";
import Navbar from "./Components/Navbar.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage" // Ensures tokens persist
    useRefreshTokens={true}
  >
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-shrink-0 max-sm:hidden">
          <Sidebar />
        </div>
        <div className="flex-grow overflow-auto pb-8">
          <Navbar />
          <App />
        </div>
      </div>
    </BrowserRouter>
  </Auth0Provider>,
);
