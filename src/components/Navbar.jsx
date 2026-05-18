import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-wide">
        <span className="text-red-600">Driver</span>
        <span className="text-white">X</span>
        <span className="text-yellow-400">Dealership</span>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-lg">

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
          className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;