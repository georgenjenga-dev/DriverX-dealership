import { useEffect, useState } from "react";
import {
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";

import { auth, provider } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Realtime authentication listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        navigate("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const login = async () => {
    setLoading(true);
    setError("");

    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
      setError("Failed to sign in");
    }

    setLoading(false);
  };

  return (
    <div className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-gray-900
      to-red-950
      flex
      justify-center
      items-center
      px-4
    ">

      <div className="
        w-full
        max-w-md
        p-10
        rounded-3xl
        backdrop-blur-xl
        bg-white/10
        border
        border-gray-700
        shadow-2xl
        text-center
      ">

        {/* Logo */}

        <div className="mb-8">

          <h1 className="
            text-5xl
            font-extrabold
            text-red-500
            tracking-wider
          ">
            DriverX
          </h1>

          <p className="
            text-gray-300
            mt-3
          ">
            Premium Car Dealership Dashboard
          </p>

        </div>

        <div className="
          w-24
          h-1
          bg-red-500
          mx-auto
          rounded-full
          mb-8
        "></div>

        {error && (
          <div className="
            bg-red-500/20
            text-red-300
            p-3
            rounded-xl
            mb-5
          ">
            {error}
          </div>
        )}

        {/* Google Login */}

        <button
          onClick={login}
          disabled={loading}
          className="
          w-full
          py-4
          rounded-xl
          bg-red-500
          hover:bg-red-600
          text-white
          font-semibold
          transition
          duration-300
          hover:scale-105
          shadow-lg
          flex
          justify-center
          items-center
          gap-4
          disabled:opacity-50
          "
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt="google"
            className="w-6 h-6"
          />

          {loading
            ? "Signing In..."
            : "Continue with Google"}

        </button>

        {user && (
          <div className="
            mt-6
            text-green-400
          ">
            Logged in as:
            <br />
            {user.displayName}
          </div>
        )}

        <p className="
          text-gray-400
          text-sm
          mt-8
        ">
          Secure authentication powered by Google
        </p>

      </div>

    </div>
  );
}

export default Login;