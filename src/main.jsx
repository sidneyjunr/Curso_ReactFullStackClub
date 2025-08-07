import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element ={<App/>}/>
        <Route path="/task" element ={<TaskPage/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>
);
