import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import AddCar from "./pages/Addcar";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carcard from "./components/Carcard";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addcar" element={<AddCar />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;