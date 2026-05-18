import { Link } from "react-router-dom";

function Navbar() {
  return (
<<<<<<< HEAD:driverXdealership/src/components/Navbar.jsx
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">
        DriverXDealership
      </h1>
=======
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg px-8 py-4 flex items-center justify-between sticky top-0 z-50">
>>>>>>> fbb3ae5 (style them):src/components/Navbar.jsx

      {/* Logo */}
      <div>
        <h1 className="text-3xl font-extrabold text-red-500 tracking-wider">
          DriverX
          <span className="text-white">Dealership</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center text-lg">

        <Link
          to="/"
          className="hover:text-red-500 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-red-500 transition duration-300"
        >
          Cars
        </Link>

        <Link
          to="/addcar"
          className="hover:text-red-500 transition duration-300"
        >
          Add Car
        </Link>

        <Link
          to="/login"
          className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-700 transition duration-300 shadow-md"
        >
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;