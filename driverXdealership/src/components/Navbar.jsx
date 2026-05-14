import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">
        DriverXDealership
      </h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Cars</Link>
        <Link to="/addcar">Add Car</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;