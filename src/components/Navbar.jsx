import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "../firebase/config";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Realtime auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      bg-black/80
      border-b
      border-gray-800
      shadow-xl
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
      ">

        {/* Logo */}

        <Link to="/">
          <h1 className="
            text-3xl
            font-extrabold
            tracking-wide
            cursor-pointer
          ">
            <span className="text-red-600">
              Driver
            </span>

            <span className="text-white">
              X
            </span>

            <span className="
              text-yellow-400
              ml-1
            ">
              Dealership
            </span>
          </h1>
        </Link>

        {/* Desktop menu */}

        <div className="
          hidden
          md:flex
          items-center
          gap-8
        ">

          <NavLink
            to="/"
            className={({isActive}) =>
              isActive
                ? "text-red-500 font-bold"
                : "text-white hover:text-red-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({isActive}) =>
              isActive
                ? "text-red-500 font-bold"
                : "text-white hover:text-red-500 transition"
            }
          >
            Cars
          </NavLink>

          <NavLink
            to="/addcar"
            className={({isActive}) =>
              isActive
                ? "text-red-500 font-bold"
                : "text-white hover:text-red-500 transition"
            }
          >
            Add Car
          </NavLink>

          {user ? (
            <div className="
              flex
              items-center
              gap-4
            ">

              <img
                src={user.photoURL}
                alt="user"
                className="
                  w-10
                  h-10
                  rounded-full
                  border-2
                  border-red-500
                "
              />

              <button
                onClick={logout}
                className="
                  bg-red-600
                  px-5
                  py-2
                  rounded-xl
                  hover:bg-red-700
                  transition
                "
              >
                Logout
              </button>

            </div>
          ) : (
            <Link
              to="/login"
              className="
                bg-red-600
                px-5
                py-2
                rounded-xl
                hover:bg-red-700
                transition
                shadow-lg
              "
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile button */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="
            md:hidden
            text-3xl
            text-white
          "
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}

      {menuOpen && (

        <div className="
          md:hidden
          bg-gray-900
          px-6
          pb-6
          flex
          flex-col
          gap-5
          text-white
        ">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/dashboard">
            Cars
          </NavLink>

          <NavLink to="/addcar">
            Add Car
          </NavLink>

          {user ? (
            <button
              onClick={logout}
              className="
                bg-red-600
                py-3
                rounded-lg
              "
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="
                bg-red-600
                py-3
                rounded-lg
                text-center
              "
            >
              Login
            </Link>
          )}

        </div>

      )}

    </nav>
  );
}

export default Navbar;