import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

function Login() {
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login Successful");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex justify-center items-center px-4">

      <div className="bg-white/10 backdrop-blur-lg border border-gray-700 p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">

        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-red-500">
            DriverX
          </h1>

          <p className="text-gray-300 mt-2">
            Sign in to access your dealership dashboard
          </p>
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-red-500 mx-auto mb-8 rounded-full"></div>

        {/* Google Button */}
        <button
          onClick={login}
          className="
          w-full
          bg-red-500
          hover:bg-red-600
          text-white
          font-semibold
          py-4
          rounded-xl
          transition-all
          duration-300
          shadow-lg
          hover:scale-105
          flex
          justify-center
          items-center
          gap-3
          "
        >
          <span className="text-xl">🔐</span>
          Continue with Google
        </button>

        {/* Footer text */}
        <p className="text-gray-400 text-sm mt-8">
          Secure authentication powered by Google
        </p>

      </div>

    </div>
  );
}

export default Login;