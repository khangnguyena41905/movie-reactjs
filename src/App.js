import logo from "./logo.svg";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
