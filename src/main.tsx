import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <div className=" flex h-screen">
  <Sidebar />
  <App />
  </div>
    
  </BrowserRouter>
);
