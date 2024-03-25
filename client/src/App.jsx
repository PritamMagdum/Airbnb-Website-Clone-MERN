import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
