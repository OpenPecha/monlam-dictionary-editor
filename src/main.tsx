import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <div className="flex h-screen overflow-hidden">
      <div className="flex-shrink-0 max-sm:hidden">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-auto pb-8">
        <App />
      </div>
    </div>
    
  </BrowserRouter>
);
